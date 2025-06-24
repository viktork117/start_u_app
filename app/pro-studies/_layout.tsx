import { Stack } from 'expo-router';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ProStudies = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="neural" options={{ headerShown: false }} />
        <Stack.Screen name="planning" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}

export default ProStudies;