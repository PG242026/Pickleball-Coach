# Pickleball Coach Ai - Android Wrapper (Capacitor)

Dit project bevat de Android-wrapper voor de bestaande Pickleball Coach Ai webapp.

## Configuratie (gecontroleerd)

- **Appnaam:** Pickleball Coach Ai
- **Package ID:** `com.pickleballcoach.ai`
- **Framework:** Capacitor
- **Platform:** Android
- **Remote webapp URL:** `https://pickleball-coach-tc5q.vercel.app`

De configuratie gebruikt `server.url` in `capacitor.config.ts`. Daardoor laadt de Android-app direct de live Vercel-app.

## Bestandsstructuur

- `package.json` – npm scripts en Capacitor dependencies
- `capacitor.config.ts` – appnaam, package id en live URL
- `android/` – Android platformproject (na `npx cap add android`)
- `resources/icon/` – bronbestanden voor app icon
- `resources/splash/` – bronbestanden voor splashscreen

## Lokaal bouwen (stap voor stap)

1. Installeer Node.js 20+ en Android Studio.
2. Installeer dependencies:
   ```bash
   npm install
   ```
3. Voeg Android platform toe (eenmalig):
   ```bash
   npx cap add android
   ```
4. Sync native project met Capacitor config:
   ```bash
   npx cap sync android
   ```
5. Open Android Studio:
   ```bash
   npx cap open android
   ```
6. Kies emulator/device en run de app.

## Assets voorbereiden

### 1) App icon

1. Plaats een vierkante bronafbeelding (bijv. `1024x1024`) in `resources/icon/`.
2. Gebruik Android Studio (Image Asset) of je eigen asset pipeline om `mipmap-*` iconsets te genereren.
3. Zet de gegenereerde iconen in:
   - `android/app/src/main/res/mipmap-mdpi/`
   - `android/app/src/main/res/mipmap-hdpi/`
   - `android/app/src/main/res/mipmap-xhdpi/`
   - `android/app/src/main/res/mipmap-xxhdpi/`
   - `android/app/src/main/res/mipmap-xxxhdpi/`

### 2) Splashscreen

1. Plaats een splash bronbestand in `resources/splash/` (bijv. PNG).
2. Maak of update splash assets in `android/app/src/main/res/drawable*`.
3. Controleer in Android Studio of het launch theme correct verwijst naar de splash resources.

## Camera/video permissies (indien nodig)

Als de webapp camera of video-opname gebruikt (bijv. via `<input type="file" capture>` of WebRTC), voeg na `npx cap add android` onderstaande permissies toe in `android/app/src/main/AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

> `RECORD_AUDIO` is alleen nodig als je video met audio of live WebRTC met microfoon gebruikt.

Daarna altijd opnieuw syncen:

```bash
npx cap sync android
```

## Snelle checks

- `appName` blijft **Pickleball Coach Ai** in `capacitor.config.ts`.
- `server.url` blijft `https://pickleball-coach-tc5q.vercel.app`.
- Bij wijzigingen in config of web assets: altijd `npx cap sync android` draaien.
