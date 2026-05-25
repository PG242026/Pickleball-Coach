# Pickleball Coach Ai - Android Wrapper (Capacitor)

Dit project bevat de eerste Android-wrapper voor de bestaande Pickleball Coach Ai webapp.

## Configuratie

- **Appnaam:** Pickleball Coach Ai
- **Package ID:** `com.pickleballcoach.ai`
- **Framework:** Capacitor
- **Platform:** Android
- **Remote webapp URL:** `https://pickleball-coach-tc5q.vercel.app`

De configuratie gebruikt `server.url` in `capacitor.config.ts`. Daardoor laadt de Android-app steeds direct de live Vercel-app. Nieuwe deploys via GitHub/Vercel zijn dus automatisch zichtbaar zonder nieuwe app-build.

## Structuur

- `capacitor.config.ts` – Capacitor app + server configuratie
- `android/` – gereserveerde map voor het Android-platformproject
- `resources/icon/` – voorbereidingsmap voor app-icon assets
- `resources/splash/` – voorbereidingsmap voor splash assets

## Android Studio stappen

1. Installeer Node.js 20+ en Android Studio.
2. Installeer dependencies:
   ```bash
   npm install
   ```
3. Voeg Android platform toe:
   ```bash
   npx cap add android
   ```
4. Sync Capacitor configuratie:
   ```bash
   npx cap sync android
   ```
5. Open in Android Studio:
   ```bash
   npx cap open android
   ```
6. Kies emulator of device en run de app.

## Opmerking

In deze omgeving kon `npm install` op de npm registry niet volledig worden uitgevoerd door een `403 Forbidden` policy. Daarom is de projectstructuur en configuratie alvast klaargezet, en kun je op een lokale machine met normale npm-toegang direct de Android map laten genereren.
