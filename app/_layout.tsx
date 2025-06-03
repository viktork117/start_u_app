import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { initializeDatabase } from '@/stores/db/init';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

if (!__DEV__) {
  SplashScreen.preventAutoHideAsync();
  
  SplashScreen.setOptions({
    duration: 500,
    fade: true,
  })
}


export default function RootLayout() {
  const [loaded] = useFonts({
    SeymourOne: require('../assets/fonts/SeymourOne-Regular.ttf'),
    NatoSans: require('../assets/fonts/NotoSans.ttf'),
  });

  const fnInitDB = () => {
    try {
      initializeDatabase();
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    fnInitDB();
  }, []);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const colorsTheme = DefaultTheme;

  return (
    <ThemeProvider value={colorsTheme}>
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
