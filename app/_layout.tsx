import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
// import * as SplashScreen from 'expo-splash-screen';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { getUserCourseAndGroup, initializeDatabase } from '@/stores/db/init';

import 'react-native-reanimated';

// SplashScreen.preventAutoHideAsync();

// SplashScreen.setOptions({
//   duration: 2000,
//   fade: true,
// })

export default function RootLayout() {
  const [loaded] = useFonts({
    SeymourOne: require('../assets/fonts/SeymourOne-Regular.ttf'),
    NatoSans: require('../assets/fonts/NotoSans.ttf'),
  });

  const [isFirstStart, setIsFirstStart] = useState(true);

  const fnInitDB = () => {
    try {
      initializeDatabase();
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    fnInitDB();
    console.log("rerender")
  }, []);

  useEffect(() => {
    const fnCall = async () => {
      const result = await getUserCourseAndGroup();
      setIsFirstStart(!result);
    }
    fnCall();
  }, [])

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const colorsTheme = DefaultTheme;

  return (
    <ThemeProvider value={colorsTheme}>
      <Stack>
        { isFirstStart && <Stack.Screen name="(onboarding)" options={{ headerShown: false }} /> }
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
