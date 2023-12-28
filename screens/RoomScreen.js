// screens/RoomScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RoomScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Room List</Text>
      {/* Your Room List components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', 
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Add additional styles for your Room List components as needed
});

export default RoomScreen;
