import { Stack } from 'expo-router';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AntiStressLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="grounding" options={{ headerShown: false }} />
        <Stack.Screen name="stop" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}

export default AntiStressLayout;