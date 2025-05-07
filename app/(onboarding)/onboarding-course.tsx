import PatternedBackground from '@/components/Onboarding/PatternedBackground';
import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

const OnboardingCourse = () => {
  const routs = useRouter();
  
  return (
    <PatternedBackground>
      <View>
        <Button title="back" onPress={() => routs.back()}/>
        <Text style={{ color: "white" }}>Hello, World 2</Text>
      </View>
    </PatternedBackground>
  );
}

const styles = StyleSheet.create({
  titleContainer: {}
});

export default OnboardingCourse;
