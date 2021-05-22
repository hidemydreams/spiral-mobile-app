import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './HomeTabs';
import screens from '../constants/screens';
import SavingStack from '../screens/Saving/Saving';
import CheckingStack from '../screens/Checking/Checking';
import { useAppSelector } from '../redux/hooks';
import SignIn from '../screens/SignIn/SignIn';
import VideoPlayer from '../screens/VideoPlayer/VideoPlayer';
import ProfileStack from './ProfileStack/ProfileStack';

function AppNavigationContainer() {
  const Stack = createStackNavigator();
  const JWT_TOKEN = useAppSelector(state => state.loginReducer?.JWT_TOKEN);
  return (
    <>
      {JWT_TOKEN ? (
        <>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={() => ({
                headerShown: false,
              })}>
              <Stack.Screen name={screens.HOME} component={HomeTabs} />
              <Stack.Screen name={screens.CHECKING} component={CheckingStack} />
              <Stack.Screen name={screens.SAVING} component={SavingStack} />
              <Stack.Screen
                name={screens.VIDEO_PLAYER}
                component={VideoPlayer}
              />
              <Stack.Screen name={screens.PROFILE} component={ProfileStack} />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default AppNavigationContainer;
