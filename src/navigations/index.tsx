import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './HomeTabs';
import screens from '../constants/screens';
import SavingStack from '../screens/Saving/Saving';
import CheckingStack from '../screens/Checking/Checking';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import SignIn from '../screens/SignIn/SignIn';

function AppNavigationContainer() {
  const Stack = createStackNavigator();
  const JWT_TOKEN = useAppSelector(state => state.loginReducer?.JWT_TOKEN);
  console.log(JWT_TOKEN);
  // const dispatch = useAppDispatch();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        {JWT_TOKEN ? (
          <>
            <Stack.Screen name={screens.HOME} component={HomeTabs} />
            <Stack.Screen name={screens.CHECKING} component={CheckingStack} />
            <Stack.Screen name={screens.SAVING} component={SavingStack} />
          </>
        ) : (
          <Stack.Screen name={screens.SIGN_IN} component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigationContainer;
