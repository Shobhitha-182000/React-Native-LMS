import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LoginScreen } from './LoginScreen';

export function SignupScreen() {
  const navigation = useNavigation();
  const router=useRoute()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {/* Handle Signup */}} 
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/LoginScreen')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius:10
  },
  button: {
    width: '100%',  
    backgroundColor: '#FF6F00',  
    paddingVertical: 10,  
    alignItems: 'center',  
    borderRadius: 5,  
    marginVertical: 10, 
  },
  buttonText: {
    color: '#fff',  
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: 'green', // Link color
    marginTop: 15,
    fontSize: 16,
    fontWeight:'bold'
  },
});
