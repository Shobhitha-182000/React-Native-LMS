// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { NavigationContainer } from '@react-navigation/native';
// import MainPage from './pages/MainPage';
// // import Dashboard from './contents/Dashboard';
// import Journey from './contents/Journey';
// import Whatnext from './contents/Whatnext';
// import Webdev from './contents/Webdev';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // Define the Tab Navigator
// const Tab = createBottomTabNavigator();

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;
//           if (route.name === 'Dashboard') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Journey') {
//             iconName = focused ? 'map' : 'map-outline';
//           } else if (route.name === 'Whatnext') {
//             iconName = focused ? 'stats-chart' : 'stats-chart-outline';
//           }
//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         tabBarStyle: {
//           backgroundColor: '#e5f6e0', // Background color of the tab bar
//           borderTopColor: '#004d00', // Border color of the tab bar
//           borderTopWidth: 1, // Border width of the tab bar
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: '#004d00',
//         inactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen name="Dashboard" component={Dashboard} />
//       <Tab.Screen name="Journey" component={Journey} />
//       <Tab.Screen name="Whatnext" component={Whatnext} />
//     </Tab.Navigator>
//   );
// }

// // Define the Stack Navigator
// const Stack = createStackNavigator();

// function AppNavigator() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#004d00', // Green color for top bar
//         },
//         headerTintColor: '#fff', // White color for text in top bar
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//         headerBackTitleVisible: false, // Hide the back button text
//         headerBackImage: () => (
//           <Icon name="arrow-back" size={24} color="#fff" style={{ marginLeft: 10 }} />
//         ),
//       }}
//     >
//       <Stack.Screen
//         name="MainPage"
//         component={MainPage}
//         options={{
//           headerStyle: {
//             height: 60, // Adjust header height if needed
//           },
//           headerTitle: '', // Hide title if needed
//         }}
//       />
//       <Stack.Screen
//         name="TabNavigator"
//         component={TabNavigator}
//         options={{ headerShown: false }} // Hide header for the Tab Navigator
//       />
//       <Stack.Screen name="Webdev" component={Webdev} />
//     </Stack.Navigator>
//   );
// }

//  export default AppNavigator;

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from './pages/MainPage';
import Dashboard from './contents/Dashboard';
import TabNavigator from './contents/Navigator';
 

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="MainPage" component={MainPage} options={{headerShown:false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} /> 
        <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }} 
      /> 
      </Stack.Navigator>
    
  );
}
