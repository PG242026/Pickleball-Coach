const DEFAULT_MODEL = 'gpt-5.1';

function sendError(status, message) {
  const error = new Error(message);
  error.statusCode = status;
  return error;
}

function buildPrompt({ speler, niveau, techniek, taal, frames }) {
  const taalNaam = {
    nl: 'Nederlands',
    en: 'English',
    de: 'Deutsch',
    es: 'Español',
    fr: 'Français'
  }[taal] || 'Nederlands';

  const frameList = frames.map((frame) => `- ${frame.timeLabel}`).join('\n');

  return [
    `Je bent een rustige, praktische pickleballcoach. Geef feedback in ${taalNaam}.`,
    '',
    `Speler: ${speler || 'onbekend'}`,
    `Niveau: ${niveau || 'niet gekozen'}`,
    `Techniek/oefening: ${techniek || 'algemene pickleball techniek'}`,
    '',
    'Je krijgt enkele stilstaande beelden uit dezelfde video. Beoordeel alleen wat zichtbaar is.',
    'Gebruik exacte tijdcodes uit deze lijst, zodat de app automatisch momenten kan maken:',
    frameList,
    '',
    'Schrijf een korte analyse met maximaal 6 concrete verbeterpunten.',
    'Begin elk verbeterpunt met een tijdcode in mm:ss, bijvoorbeeld: 00:06 - ...',
    'Let vooral op voetenwerk, balans, klaarstaan, paddlepositie, timing, slagvoorbereiding en herstelpositie.',
    'Noem onzekerheid als iets niet duidelijk zichtbaar is. Geef geen medische diagnose.'
  ].join('\n');
}

export async function analyseVideoPayload(body, options = {}) {
  const apiKey = options.apiKey || process.env.OPENAI_API_KEY;
  const model = options.model || process.env.OPENAI_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    throw sendError(500, 'OPENAI_API_KEY ontbreekt. Zet deze als environment variable in je hosting.');
  }

  const frames = Array.isArray(body.frames) ? body.frames.slice(0, 8) : [];
  if (!frames.length) {
    throw sendError(400, 'Geen videoframes ontvangen. Herlaad de app en probeer opnieuw.');
  }

  const content = [
    { type: 'input_text', text: buildPrompt({ ...body, frames }) },
    ...frames.map((frame) => ({
      type: 'input_image',
      image_url: frame.dataUrl,
      detail: 'low'
    }))
  ];

  const apiResponse = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      input: [{ role: 'user', content }]
    })
  });

  const data = await apiResponse.json();

  if (!apiResponse.ok) {
    const message = data.error?.message || 'OpenAI analyse mislukt.';
    throw sendError(apiResponse.status, message);
  }

  return { analyse: data.output_text || 'Geen analyse ontvangen.' };
}
