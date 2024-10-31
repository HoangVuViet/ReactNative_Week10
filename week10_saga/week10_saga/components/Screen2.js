import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Screen2 = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const { name } = route.params;

  const removeTask = (index) => {
    dispatch({ type: 'REMOVE_TODO_ASYNC', payload: index });
  };

  const editTask = (index) => {
    navigation.navigate('Screen3', { index, task: todos[index] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require('../assets/ava.png')}
        />
        <Text style={styles.headerText}>Hi {name}</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#251A5B"
      />
      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.todoItem}>
            <Image source={require('../assets/v.png')} style={styles.icon} />
            <Text style={styles.todoText}>{item}</Text>
            <TouchableOpacity onPress={() => editTask(index)}>
              <Image source={require('../assets/update.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeTask(index)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Screen3')}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  searchInput: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    backgroundColor:'white'
  },
  list: {
    margin: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 330,
    height: 60,
    backgroundColor: '#5BA468',
    borderRadius: 50,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    flex: 1,
    marginLeft: 10,
  },
  deleteText: {
    color: 'red',
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#251A5B',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
};

export default Screen2;