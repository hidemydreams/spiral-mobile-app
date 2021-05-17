import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './HomeTabs';
import SignIn from '../screens/SignIn/SignIn';
import { createStackNavigator } from '@react-navigation/stack';

function AppNavigationContainer({ navigation }) {
  const JWT_TOKEN = true;
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {JWT_TOKEN ? <HomeTabs /> : <SignIn />}
    </NavigationContainer>
  );
}

export default AppNavigationContainer;
