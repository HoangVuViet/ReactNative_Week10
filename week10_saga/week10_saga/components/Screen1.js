import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/banner.png')} style={styles.bannerImage} />
      </View>
      <Text style={styles.titleText}>Welcome to Task Manager</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#fff"
        style={styles.input}
      />
      <Button
        title="Get Started"
        color="#FF6347"
        onPress={() => navigation.navigate('Screen2', { name })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  bannerImage: {
    width: 220,
    height: 220,
    borderRadius: 20,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFD700',
    marginVertical: 20,
    textAlign: 'center',
  },
  input: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD700',
    fontSize: 16,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

export default Screen1;