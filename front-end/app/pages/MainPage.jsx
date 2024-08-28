import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Image, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useUser } from '../UserContext';

const API_URL = 'http://localhost:5000/';  


const MainPage = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');  
  const [message, setMessage] = useState('');
  const navigation = useNavigation();
  const { updateUserId } = useUser();

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/studysignups", { username, email, password });
      // const response = await axios.post("http://10.0.2.2:8000/studysignups", { username, email, password });
      setMessage('Signup successful!');
      console.log('Signup response:', response.data);
      setIsLoginScreen(true);
    } catch (error) {
      if (error.response) {
        
        console.log('Error response data:', error.response.data);
        console.log('Error response status:', error.response.status);
      } else if (error.request) {
        
        console.log('Error request:', error.request);
      } else {
       
        console.log('Error message:', error.message);
      }
      setMessage('Signup failed.', error.message);
    }
  };
  
  

  const handleLogin = async () => {
    
     
    try {
      const response = await axios.post("http://localhost:5000/studylogin", { email, password });
      // const response = await axios.post("http://10.0.2.2:8000/studylogin", { email, password });

      const userId = response.data._id;
      console.log('Login successful:', userId);
      updateUserId(userId);
     
      setMessage('Login successful!');
      navigation.navigate('TabNavigator');
    } catch (error) {
      if (error.response) {
        console.log('Error response data:', error.response.data);
        console.log('Error response status:', error.response.status);
        setMessage(`Login failed: ${error.response.data.message || error.message}`);
      } else if (error.request) {
        console.log('Error request:', error.request);
        setMessage('Login failed: No response received from server.');
      } else {
        console.log('Error message:', error.message);
        setMessage(`Login failed: ${error.message}`);
      }
    }
  };

  
  

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Welcome!!!</Text>
         
          <Text style={styles.heading1}>Embark on Your Path to Growth</Text>
        </View>
        <Image source={require("../../assets/images/bg1.jpg")} style={styles.image} />
      </View>
      <View style={styles.signupScreenBackground}>
        {isLoginScreen ? (
          <LoginScreen 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onLogin={handleLogin}
          />
        ) : (
          <SignupScreen 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            username={username}
            setUsername={setUsername}
            onSignup={handleSignup}
            onLoginPress={() => setIsLoginScreen(true)}
          />
        )}
        {message ? <Text>{message}</Text> : null}
      </View>
    </View>
  );
};

const LoginScreen = ({ email, setEmail, password, setPassword, onLogin }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <TextInput 
      style={styles.input} 
      placeholder="Email" 
      keyboardType="email-address" 
      value={email}
      onChangeText={text => setEmail(text)} 
    />
    <TextInput 
      style={styles.input} 
      placeholder="Password" 
      secureTextEntry 
      value={password}
      onChangeText={text => setPassword(text)} 
    />
    <TouchableOpacity style={styles.button} onPress={onLogin}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  </View>
);

const SignupScreen = ({ username, setUsername, email, setEmail, password, setPassword, onSignup, onLoginPress }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Signup</Text>
    <TextInput 
      style={styles.input} 
      placeholder="Username" 
      value={username}
      onChangeText={text => setUsername(text)} 
    />
    <TextInput 
      style={styles.input} 
      placeholder="Email" 
      keyboardType="email-address" 
      value={email}
      onChangeText={text => setEmail(text)} 
    />
    <TextInput 
      style={styles.input} 
      placeholder="Password" 
      secureTextEntry 
      value={password}
      onChangeText={text => setPassword(text)} 
    />
    <TouchableOpacity style={styles.button} onPress={onSignup}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onLoginPress}>
      <Text style={styles.link}>Already have an account? Login</Text>
       
    </TouchableOpacity>
  </View>
);

export default MainPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor:'#d0f0c0',
    // backgroundColor: "#004d00",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    color: "#004d00",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  heading1: {
    paddingTop: 40,
    color: "orange",
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  image: {
    marginTop: 100,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  signupScreenBackground: {
    backgroundColor: "#fff",
    width: 400,
    height: 450,
    marginTop: 50,
    borderRadius: 60,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#FF6F00",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "green",
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
});
