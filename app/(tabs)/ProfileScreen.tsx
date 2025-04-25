// ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/me.png')} 
        style={styles.profileImage}
      />
      <Text style={styles.name}>Denise Valerie</Text>
      <Text style={styles.username}>@denisecutie</Text>

      <View style={styles.details}>
        <Text style={styles.detailItem}>📧 alindenise802@gmail.com</Text>
        <Text style={styles.detailItem}>📍 Danglag, Consolacion, Cebu, Philippines</Text>
        <Text style={styles.detailItem}>💻 Mobile Developer • UI Enthusiast</Text>
        <Text style={styles.detailItem}>🦄 Loves pastel and clean design</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDB4DB',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A2D2FF',
  },
  username: {
    fontSize: 16,
    color: '#FEE440',
    marginBottom: 20,
  },
  details: {
    backgroundColor: '#BDE0FE',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  detailItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
});

export default ProfileScreen;
