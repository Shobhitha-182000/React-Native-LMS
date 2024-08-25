import React from 'react';
import { StyleSheet, TextInput, Button, View, Text } from 'react-native';

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <Button 
        title="Login" 
        onPress={() => {/* Handle Login */}} 
      />
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
  },
});
