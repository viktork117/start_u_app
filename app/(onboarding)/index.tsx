import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

import PatternedBackground from '@/components/Onboarding/PatternedBackground';

const OnboardingHello = () => {
  const routs = useRouter();

  const fnNavigatePage = (numPage: number) => {
    switch (numPage) {
      case 2:
        routs.navigate("/onboarding-course");
        break;
      case 3:
        routs.navigate("/onboarding-course");
        break;
      case 4: 
        routs.navigate("/onboarding-finish");
        break;
      default:
        routs.navigate("/");
        break;
    }
  }

  return (
    <PatternedBackground>
      <View>
        <Text style={{ color: "white" }}>Hello, World 1</Text>
        <Button title="Hello, World 2" onPress={() => fnNavigatePage(2)} />
        <Button title="Hello, World 3" onPress={() => fnNavigatePage(3)} />
        <Button title="Hello, World 4" onPress={() => fnNavigatePage(4)} />
      </View>
    </PatternedBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {}
});

export default OnboardingHello;
