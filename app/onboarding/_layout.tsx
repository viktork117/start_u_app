import { Stack } from 'expo-router';
import React from 'react';

const OnboardingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding-course" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding-group" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding-finish" options={{ headerShown: false }} />
    </Stack>
  );
}

export default OnboardingLayout;
