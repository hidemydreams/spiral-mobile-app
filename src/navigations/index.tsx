import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './HomeTabs';
import screens from '../constants/screens';
import CheckingStack from './CheckingNavigator';
import SavingStack from './SavingsNavigator';

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
