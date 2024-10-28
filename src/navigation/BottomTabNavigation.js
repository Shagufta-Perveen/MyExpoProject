import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/home/Home';
import Menu from '../screen/menu/Menu';
import Stock from '../screen/stock/Stock';
import Settings from '../screen/settings/Settings';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Stock') {
            iconName = focused ? 'cube' : 'cube-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6A0DAD',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home}   options={{ headerShown: false }} />
      <Tab.Screen name="Menu" component={Menu}    options={{ headerShown: false }}/>
      <Tab.Screen name="Stock" component={Stock}   options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={Settings}   options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;  


