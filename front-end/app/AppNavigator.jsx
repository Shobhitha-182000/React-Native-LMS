// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './pages/MainPage';
import TabNavigator from './contents/Navigator';
import { UserProvider } from './UserContext'; // Import UserProvider

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <UserProvider>
    
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    
    </UserProvider>
  );
};

export default AppNavigator;
