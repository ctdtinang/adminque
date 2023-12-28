// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleUserLogin = () => {
    // Add your user login logic here
    // Example: Validate user credentials and navigate to User Dashboard
    navigation.navigate('UserDashboard');
  };

  return (
    
    <View style={styles.container}>
        <Image source={require('../assets/samplelogo.png')} style={styles.logo} />
      <View style={styles.formContainer}>
      <Text style={styles.welcomeText}>Welcome User </Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TouchableOpacity style={styles.loginButton} onPress={handleUserLogin}>
          <Text style={styles.loginButtonText}>Login </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AdminLogin')}>
          <Text style={styles.adminLink}>Administrator Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CACED4',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'left',
  },
  logo: {
    width: 250, 
    height: 250, 
    marginTop: 40,
    marginBottom: 10,
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    borderWidth: 2,
    borderColor: '#1A1851',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: '#1A1851',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#FCB316',
    fontSize: 16,
  },
  adminLink: {
    color: '#1A1851',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
