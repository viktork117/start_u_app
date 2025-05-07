import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import 'react-native-reanimated';

// SplashScreen.preventAutoHideAsync();

// SplashScreen.setOptions({
//   duration: 2000,
//   fade: true,
// })

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const colorsTheme = DefaultTheme;

  return (
    <ThemeProvider value={colorsTheme}>
        <Stack>
          <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
