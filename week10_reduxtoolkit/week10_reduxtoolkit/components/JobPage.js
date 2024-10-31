import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const JobScreen = ({ navigation }) => {
  const [job, setJob] = useState('');

  const addJob = async () => {
    if (job.trim()) {
      try {
        const response = await fetch('https://66fe14a0699369308956fc21.mockapi.io/Tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: job,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to add job');
        }

        const data = await response.json();
        Alert.alert('Success', 'Job added successfully!');
        navigation.navigate('Task', { newTask: data });
      } catch (error) {
        console.error('Error adding job:', error);
        Alert.alert('Error', 'Something went wrong while adding the job.');
      }
    } else {
      Alert.alert('Input Required', 'Please enter a job before adding.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome, Twinkle!</Text>
      <Text style={styles.subGreeting}>Wishing you a productive day!</Text>

      <Text style={styles.addTitle}>ADD YOUR JOB</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Describe your job"
        placeholderTextColor="#999"
        value={job}
        onChangeText={setJob}
      />
      
      <TouchableOpacity style={styles.finishButton} onPress={addJob}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa', 
  },
  greeting: {
    fontSize: 26, 
    fontWeight: 'bold',
    color: '#343a40', 
  },
  subGreeting: {
    fontSize: 18,
    color: '#6c757d', 
    marginBottom: 20,
  },
  addTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 25, 
    paddingHorizontal: 15,
    marginBottom: 30,
    color: '#495057', 
  },
  finishButton: {
    backgroundColor: '#17a2b8', 
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20, 
    fontWeight: 'bold',
  },
});

export default JobScreen;