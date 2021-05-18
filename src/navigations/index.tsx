import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderLeft from '../components/shared/HeaderLeft';
import HeaderRight from '../components/shared/HeaderRight';
import HomeTabs from './HomeTabs';
import Checking from '../screens/Checking/Checking';
import Saving from '../screens/Saving/Saving';
import screens from '../constants/screens';
import HeaderTitle from '../components/shared/HeaderTitle';
import SavingStack from '../screens/Saving/Saving';
import CheckingStack from '../screens/Checking/Checking';

function AppNavigationContainer() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name={screens.HOME} component={HomeTabs} />
        <Stack.Screen name={screens.CHECKING} component={CheckingStack} />
        <Stack.Screen name={screens.SAVING} component={SavingStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigationContainer;
