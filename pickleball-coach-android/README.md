# Pickleball Coach Ai Android Wrapper

## 1. Wat dit project is
Dit project is de Android-wrapper (Capacitor) voor de live Pickleball Coach Ai webapp.

## 2. Appnaam
Pickleball Coach Ai

## 3. Package ID
`com.pickleballcoach.ai`

## 4. Live URL
`https://pickleball-coach-tc5q.vercel.app`

## 5. Installatiestappen
Voer deze stappen uit in `pickleball-coach-android/`:

```bash
npm install
npm run cap:add:android
npm run cap:sync
npm run cap:open
```

## 6. App icon uitleg
Gebruik een vierkante bronafbeelding (bij voorkeur 1024x1024) en genereer Android iconsets voor alle `mipmap-*` mappen. Controleer in Android Studio dat de launcher icon resources correct zijn ingesteld.

## 7. Splashscreen uitleg
Plaats een splash-afbeelding in `resources/splash/`, genereer/update de splash resources in `android/app/src/main/res/drawable*` en controleer dat het launch theme naar deze resources verwijst.

## 8. Camera permissies
Als de app camera of video-opname gebruikt, voeg dan in `android/app/src/main/AndroidManifest.xml` toe:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

Gebruik `RECORD_AUDIO` alleen als audio-opname nodig is.
