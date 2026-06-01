# OpenAI backend instellen

De knop **Analyseer met AI** gebruikt nu een backend-route: `/api/analyse-video`.

## Benodigd

Zet deze environment variable in je hostingomgeving:

```text
OPENAI_API_KEY=je-openai-api-key
```

Optioneel:

```text
OPENAI_MODEL=gpt-5.1
```

## Vercel

Deze repository bevat een Vercel-compatible API route:

```text
api/analyse-video.js
```

Na merge en deploy kan de app vanaf telefoon en tablet de route `/api/analyse-video` gebruiken.

## Lokaal testen

```bash
npm start
```

Open daarna:

```text
http://localhost:3000
```

## Let op

GitHub Pages alleen kan geen geheime API key bewaren en geen Node/API route draaien. Gebruik voor AI-analyse Vercel, Render, Netlify Functions of een andere backend-host.
