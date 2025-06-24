import React from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const StopLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="game-one" options={{ headerShown: false }} />
        <Stack.Screen name="game-two" options={{ headerShown: false }} />
        <Stack.Screen name="game-three" options={{ headerShown: false }} />
        <Stack.Screen name="game-four" options={{ headerShown: false }} />
        <Stack.Screen name="game-five" options={{ headerShown: false }} />
        <Stack.Screen name="end-game" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}

export default StopLayout;