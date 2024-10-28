import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screen/splash/Splash';
import Login from '../screen/login/Login';
import BottomTabNavigation from './BottomTabNavigation'; 

const Stack = createStackNavigator();

const RootStackNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}   options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login}    options={{ headerShown: false }}/>
        <Stack.Screen 
          name="Home" 
          component={BottomTabNavigation} // Now navigates to Bottom Tabs
          options={{ headerShown: false }} // Hide header for the bottom tab navigation
        />
      </Stack.Navigator>
  );
};

export default RootStackNavigation;
