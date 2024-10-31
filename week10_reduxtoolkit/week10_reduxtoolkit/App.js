// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store'; // Adjust the import path as necessary
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginPage';
import TaskScreen from './components/TaskPage';
import JobScreen from './components/JobPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Task" component={TaskScreen} />
          <Stack.Screen name="Job" component={JobScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;