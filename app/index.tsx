import { useRouter } from "expo-router";
import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';

const Main = () => {
  const routes = useRouter();
  
  const fnInitGo = useCallback(() => routes.navigate("/onboarding-hello"), []);
  
    useEffect(() => {
      fnInitGo();
    }, [fnInitGo])
  return (
      <View>
        <Text style={{ color: "white" }}>Hello, Root Index</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {}
});

export default Main;
