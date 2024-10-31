// MainApp.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const MainApp = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const addTask = () => {
    if (task.trim()) {
      dispatch({ type: 'ADD_TODO_ASYNC', payload: task });
      setTask('');
    }
  };

  const removeTask = (index) => {
    dispatch({ type: 'REMOVE_TODO_ASYNC', payload: index });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="Enter a task"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 10,
        }}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text>
              style={{
                padding: 10,
                borderBottomWidth: 1,
                borderColor: '#ccc',
              }}>
              {item}
            </Text>

            <TouchableOpacity onPress={() => removeTask(index)}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default MainApp;
