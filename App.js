import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigation from './src/navigation/RootStackNavigation';


export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
}