import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

import PatternedBackground from "@/components/Onboarding/PatternedBackground";

const OnboardingFinish = () => {
  const routs = useRouter();

  return (
    <PatternedBackground>
      <View>
        <Button title="back" onPress={() => routs.back()} />
        <Text style={{ color: "white" }}>Hello, World 4</Text>
      </View>
    </PatternedBackground>
  );
};

const styles = StyleSheet.create({
  titleContainer: {},
});

export default OnboardingFinish;
