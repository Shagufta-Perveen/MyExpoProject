import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing icons

const Splash= ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image source={require('../../assets/logo_suky.png')} style={styles.logo} />

      {/* Continue Button with Arrow */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Continue</Text>
        <Icon name="arrow-forward-outline" size={20} color="#6A0DAD" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    resizeMode:'cover',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#8a19d6' 
  },
  logo: { 
    width: 300, 
    height: 300, 
    resizeMode: 'contain' 
  },
  button: { 
    marginTop: 30, 
    backgroundColor: '#fff', 
    paddingVertical: 10, 
    paddingHorizontal: 70, 
    borderRadius: 25, 
    flexDirection: 'row', 
    alignItems: 'center' // Align icon and text horizontally
  },
  buttonText: { 
    color: '#6A0DAD', 
    fontSize: 18, 
    marginRight: 10 // Adds space between text and arrow icon
  },
  icon: {
    marginLeft: 5 // Optional, to add some space between text and icon
  }
});

export default Splash;


