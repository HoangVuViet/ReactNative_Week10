import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Image, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, deleteTask, addTask } from '../slice/taskSlice';

const TaskScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    if (route.params?.newTask) {
      const newTask = { id: (tasks.length + 1).toString(), ...route.params.newTask };
      dispatch(addTask(newTask));
      route.params.newTask = null;
    }
  }, [route.params?.newTask, tasks, dispatch]); 

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      {item.img && <Image source={{ uri: item.img }} style={styles.taskImage} />}
      <Text style={styles.taskText}>{item.name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => dispatch(deleteTask(item.id))}>
          <Text style={styles.deleteButton}>Xóa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('', { task: item })}>
          <Text style={styles.editButton}>Sửa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00bcd4" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome, Twinkle!</Text>
      <Text style={styles.subGreeting}>Hope you're having a fantastic day!</Text>
      <TextInput style={styles.searchInput} placeholder="Tìm kiếm" placeholderTextColor="#999" />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Job')}>
        <Text style={styles.addIcon}>+</Text>
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
loadingContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
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
searchInput: {
width: '100%',
height: 45,
borderColor: '#ced4da',
borderWidth: 1,
borderRadius: 25, 
paddingHorizontal: 15,
marginBottom: 20,
color: '#495057',
},
list: {
paddingBottom: 20,
},
taskContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
borderRadius: 10,
backgroundColor: '#e9ecef',
marginBottom: 10,
},
taskText: {
fontSize: 18,
color: '#000',
},
buttonContainer: {
flexDirection: 'row',
},
deleteButton: {
color: '#dc3545',
marginRight: 10,
},
editButton: {
color: '#007bff', 
},
addButton: {
position: 'absolute',
bottom: 20,
right: 20,
backgroundColor: '#17a2b8',
borderRadius: 30,
width: 60,
height: 60,
justifyContent: 'center',
alignItems: 'center',
},
addIcon: {
color: '#fff',
fontSize: 30,
},
taskImage: {
width: 50,
height: 50,
borderRadius: 5,
},
});


export default TaskScreen;