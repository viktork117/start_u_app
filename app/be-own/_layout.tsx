import { Redirect, Stack } from 'expo-router';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const MainLayout = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Redirect href="/+not-found" />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}

export default MainLayout;