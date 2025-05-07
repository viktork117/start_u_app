import { Stack } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="onboarding-hello" options={{ headerShown: false }} />
      {/* <Stack.Screen name="onboarding-course" />
      <Stack.Screen name="onboarding-group" />
      <Stack.Screen name="onboarding-finish" /> */}
    </Stack>
  );
}
