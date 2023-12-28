// screens/AdminDashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faCalendar, faClipboard, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const AdminDashboardScreen = ({ navigation }) => {
  const handleIconClick = (iconName) => {
    // Handle click based on the iconName
    // Example: Navigate to the corresponding screen
    switch (iconName) {
      case 'Rooms':
        navigation.navigate('Rooms');
        break;
      case 'Booking':
        navigation.navigate('Booking');
        break;
      case 'Audit':
        navigation.navigate('Audit');
        break;
      case 'Status':
        navigation.navigate('Status');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>WELCOME ADMIN  </Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handleIconClick('Rooms')}>
          <View style={styles.iconRow}>
            <FontAwesomeIcon icon={faHouse} size={50} color="#FCB316" />
            <Text style={styles.iconText}>Rooms  </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconClick('Booking')}>
          <View style={styles.iconRow}>
            <FontAwesomeIcon icon={faCalendar} size={50} color="#FCB316" />
            <Text style={styles.iconText}>Booking  </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconClick('Audit')}>
          <View style={styles.iconRow}>
            <FontAwesomeIcon icon={faClipboard} size={50} color="#FCB316" />
            <Text style={styles.iconText}>Audit </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconClick('Status')}>
          <View style={styles.iconRow}>
            <FontAwesomeIcon icon={faInfoCircle} size={50} color="#FCB316" />
            <Text style={styles.iconText}>Status </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#CACED4',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: '#FCB316',
    backgroundColor: '#1A1851',
    borderRadius: 10,
    overflow: 'hidden',
    height: 350, 
    width: 300, 
    padding: 10, 
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 80, 
    paddingLeft: 20, 
  },
  iconText: {
    fontSize: 20,
    marginLeft: 20,
    color: '#FFFFFF',
  },
});

export default AdminDashboardScreen;
