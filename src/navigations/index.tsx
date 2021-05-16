import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './HomeTabs';
import SignIn from '../screens/SignIn/SignIn';

function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <HomeTabs />
      {/* <SignIn /> */}
    </NavigationContainer>
  );
}

export default AppNavigationContainer;
