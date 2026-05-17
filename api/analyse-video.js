export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Alleen POST toegestaan"
        });
    }

    try {

        const {
            videoBase64,
            mimeType,
            speler,
            niveau,
            techniek
        } = req.body;

        if (!videoBase64) {
            return res.status(400).json({
                error: "Geen video ontvangen"
            });
        }

        const apiKey =
            process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                error: "GEMINI_API_KEY ontbreekt"
            });
        }

        const prompt = `
Je bent een professionele Nederlandse pickleball coach.

Analyseer deze leerlingvideo.

Gegevens:
Speler: ${speler || "Onbekend"}
Niveau: ${niveau || "Onbekend"}
Techniek/oefening: ${techniek || "Onbekend"}

Geef coachinganalyse in het Nederlands.

Gebruik dit format:

ALGEMENE INDRUK
- korte samenvatting

BELANGRIJKE MOMENTEN
- 00:00 beschrijving
- 00:00 verbeterpunt
- 00:00 sterk punt

TECHNIEK
- voetenwerk
- paddlepositie
- balans
- houding
- timing

VERBETERPUNTEN
- maximaal 5 punten

OEFENINGEN
- 3 oefeningen

COACH ADVIES
- korte afsluiting
`;

        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": apiKey
                },

                body: JSON.stringify({

                    contents: [
                        {
                            parts: [

                                {
                                    inline_data: {
                                        mime_type:
                                            mimeType || "video/webm",

                                        data:
                                            videoBase64
                                    }
                                },

                                {
                                    text: prompt
                                }

                            ]
                        }
                    ]

                })
            }
        );

        const data =
            await response.json();

        if (!response.ok) {

            return res.status(500).json({
                error: "Gemini API fout",
                details: data
            });

        }

        const analyse =
            data?.candidates?.[0]?.content?.parts?.[0]?.text
            || "Geen analyse ontvangen.";

        return res.status(200).json({
            analyse: analyse
        });

    }

    catch (error) {

        return res.status(500).json({
            error: "Server fout",
            details: error.message
        });

    }

}
