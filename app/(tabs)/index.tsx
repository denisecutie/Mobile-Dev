import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LottieView from 'lottie-react-native';

export default function HomeScreen() {
  const animation = useRef<LottieView | null>(null);

  useEffect(() => {
    if (animation.current) {
      animation.current.play();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My App</Text>
      <Text style={styles.subtitle}>Explore and enjoy!</Text>
      <Text style={styles.message}>Hi! I am <Text style={{ fontWeight: 'bold', color: '#FFAFCC' }}>Denise Valerie</Text>{'\n'}and I am glad you're here.{'\n'}Get started below.</Text>

      <Image
        source={require('@/assets/images/react-logo.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <LottieView
        ref={animation}
        source={require('@/assets/images/hi.json')} 
        style={styles.image}
        loop
      />

      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Are you ready?', 'Let\'s get started!')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDB4DB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#A2D2FF',
  },
  subtitle: {
    fontSize: 18,
    color: '#BDE0FE',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FFC8DD',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
