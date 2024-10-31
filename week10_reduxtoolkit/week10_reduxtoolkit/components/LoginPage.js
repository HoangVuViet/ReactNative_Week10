import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ScreenLogin = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (!username.trim() || !pwd.trim()) {
      setErrorMessage('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.');
      return;
    }

    try {
      const response = await fetch('https://67235765493fac3cf24a8c5b.mockapi.io/Users');
      const users = await response.json();
      const user = users.find(user => user.username === username && user.pass === pwd);

      if (user) {
        navigation.navigate('Task');
      } else {
        setErrorMessage('Sai tên đăng nhập hoặc mật khẩu.');
      }
    } catch (error) {
      setErrorMessage('Lỗi trong quá trình đăng nhập. Vui lòng thử lại.');
      console.error('Lỗi:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nhập Username"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Nhập Mật khẩu"
        placeholderTextColor="#999"
        value={pwd}
        secureTextEntry
        onChangeText={setPwd}
      />

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6c63ff',
    marginBottom: 40,
  },
  input: {
    width: '85%',
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#495057',
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  registerButton: {
    marginTop: 15,
    padding: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#dc3545',
    marginBottom: 20,
  },
});

export default ScreenLogin;