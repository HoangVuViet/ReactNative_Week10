import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const Screen3 = ({ navigation }) => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (task.trim()) {
      dispatch({ type: 'ADD_TODO_ASYNC', payload: task });
      setTask('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="Enter a new task"
        style={styles.input}
      />
      <Button title="Add Task" color="#FF6347" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E6E6FA',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
});

export default Screen3;