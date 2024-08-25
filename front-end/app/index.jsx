import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  const [isLoginScreen, setIsLoginScreen] = useState(false);
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Welcome!!!</Text>
          <Text style={styles.heading1}>Learning and Development</Text>
        </View>
        <Image
          source={require("../assets/images/bg1.jpg")}
          style={styles.image}
        />
      </View>
      <View style={styles.signupScreenBackground}>
        {isLoginScreen ? (
          <LoginScreen />
        ) : (
          <SignupScreen onLoginPress={() => setIsLoginScreen(true)} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#004d00",
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
    color: "white",
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
    height: 200,
    borderRadius: 10,
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
    color: "green", // Link color
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
});

const LoginScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <TextInput
      style={styles.input}
      placeholder="Email"
      keyboardType="email-address"
    />
    <TextInput style={styles.input} placeholder="Password" secureTextEntry />
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        /* Handle Login */
      }}
    >
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  </View>
);

const SignupScreen = ({ onLoginPress }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Signup</Text>
    <TextInput
      style={styles.input}
      placeholder="Email"
      keyboardType="email-address"
    />
    <TextInput style={styles.input} placeholder="Password" secureTextEntry />
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        /* Handle Signup */
      }}
    >
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onLoginPress}>
      <Text style={styles.link}>Already have an account? Login</Text>
    </TouchableOpacity>
  </View>
);
