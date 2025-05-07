import { StyleSheet, Text, View } from 'react-native';

const Onboarding = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>Hello, World 112</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

export default Onboarding;
