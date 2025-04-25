//ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <Text style={styles.message}>This is the profile screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDB4DB',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#A2D2FF',
  },
  message: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default ProfileScreen;
