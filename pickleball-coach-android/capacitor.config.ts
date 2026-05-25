import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pickleballcoach.ai',
  appName: 'Pickleball Coach Ai',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    url: 'https://pickleball-coach-tc5q.vercel.app',
    cleartext: false,
    androidScheme: 'https'
  }
};

export default config;
