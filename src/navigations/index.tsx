import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './HomeTabs';
import screens from '../constants/screens';
import SavingStack from '../screens/Saving/Saving';
import CheckingStack from '../screens/Checking/Checking';
import { useAppSelector } from '../redux/hooks';

function AppNavigationContainer() {
  const Stack = createStackNavigator();
  const test = useAppSelector(state => state.loginReducer);
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
