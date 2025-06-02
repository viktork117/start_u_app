import { Stack } from 'expo-router';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const MainLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="timetable" options={{ headerShown: false }} />
        <Stack.Screen name="useful-contacts" options={{ headerShown: false }} />
        <Stack.Screen name="building-addresses" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}

export default MainLayout;