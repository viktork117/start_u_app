import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { initializeDatabase } from '@/stores/db/init';
import 'react-native-reanimated';

if (!__DEV__) {
  SplashScreen.preventAutoHideAsync();
  SplashScreen.setOptions({
    duration: 500,
    fade: true,
  });
}

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [loaded] = useFonts({
    SeymourOne: require('../assets/fonts/SeymourOne-Regular.ttf'),
    NatoSans: require('../assets/fonts/NotoSans.ttf'),
  });

  const fnInitDB = async (): Promise<void> => {
    try {
      await initializeDatabase();
    } catch (e) {
      console.error('Database initialization failed:', e);
      throw e;
    }
  };

  useEffect(() => {
    async function prepare() {
      try {
        await fnInitDB();
        if (!__DEV__) {
          await SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn('Error during app initialization:', e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!loaded || !isReady) return null;

  return (
    <ThemeProvider value={DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
            <Stack.Screen name="anti-stress" options={{ headerShown: false }} />
            <Stack.Screen name="my-institute" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaProvider>
      </GestureHandlerRootView>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
