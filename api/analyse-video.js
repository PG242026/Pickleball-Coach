import { analyseVideoPayload } from '../lib/openai-analysis.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Methode niet toegestaan.' });
    return;
  }

  try {
    const result = await analyseVideoPayload(req.body || {});
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({
      error: error.message || 'Serverfout.'
    });
  }
}
