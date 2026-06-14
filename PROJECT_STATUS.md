# Pickleball Coach AI v1.1 SAFE

Datum: 14 juni 2026
Status: STABIEL
Branch: main

Dit is Pickleball Coach AI v1.1 SAFE.

Deze versie is vastgelegd als veilig herstelpunt voor toekomstige ontwikkeling.

Nooit functies verwijderen of terugdraaien zonder toestemming.

## Werkende opnameketen

- 🎥 Nieuwe opname knop werkt
- camera start correct
- tijdens opname één ⏹ Stop opname knop
- stop opname sluit camera
- opgenomen video komt terug in Spelers video
- video afspelen werkt

## Bevat fixes

- PR #113 middleware opnameknop tekst
- PR #114 middleware startOpname koppeling
- PR #115 middleware stopOpname en recordingBar fix

## Beschermde bestanden

- index.html
- middleware.js
- service-worker.js
- manifest.json
- server.js

## Beschermde onderdelen

- video opname tablet/pc
- spelersvideo beheer
- YouTube vergelijking
- slowmotion
- frame voor/frame terug
- accordeons en chevrons
- AI analyse backend
- OpenAI koppeling
- Android wrapper
- PWA manifest/service-worker

## Regels voor toekomst

- opnamecode niet herschrijven
- geen volledige bestandsvervangingen
- alleen kleine patches via branch + PR
