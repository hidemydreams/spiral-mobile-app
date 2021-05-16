import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './HomeTabs';
import SignIn from '../screens/SignIn/SignIn';

function AppNavigationContainer() {
  const JWT_TOKEN = true;
  return (
    <NavigationContainer>
      {JWT_TOKEN ? <HomeTabs /> : <SignIn />}
    </NavigationContainer>
  );
}

export default AppNavigationContainer;
