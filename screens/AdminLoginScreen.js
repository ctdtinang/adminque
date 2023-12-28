// screens/AdminLoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const AdminLoginScreen = ({ navigation }) => {
  const handleAdminLogin = () => {
    // Add your admin login logic here
    // Example: Validate admin credentials and navigate to AdminDashboard
    navigation.navigate('AdminDashboard');
  };

  return (
    
    <View style={styles.container}>
      <Image source={require('../assets/samplelogo.png')} style={styles.logo} />
      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Welcome Admin</Text>
        <TextInput style={styles.input} placeholder="Admin Username" />
        <TextInput style={styles.input} placeholder="Admin Password" secureTextEntry={true} />
        <TouchableOpacity style={styles.loginButton} onPress={handleAdminLogin}>
          <Text style={styles.loginButtonText}>Login </Text>
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
    logo: {
        width: 250, 
        height: 250, 

      },
    welcomeText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'left',
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
});

export default AdminLoginScreen;
