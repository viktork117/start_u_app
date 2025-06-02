import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ImageOne from "../assets/images/not_found.png";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image 
        source={ImageOne}
        style={styles.image}
        resizeMode="contain"
      />
      
      <Text style={styles.title}>Упс... Страница не найдена</Text>
      
      <Text style={styles.subtitle}>
        Похоже, такой страницы не существует или она была перемещена
      </Text>
      
      <TouchableOpacity 
        style={[styles.button, styles.secondaryButton]}
        onPress={() => router.push('/')}
      >
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>На главную</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  button: {
    width: '100%',
    maxWidth: 300,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  secondaryButtonText: {
    color: '#495057',
  },
});