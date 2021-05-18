import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import BackButton from '../components/shared/BackButton';
import UserIcon from '../components/shared/UserIcon';
import HomeTabs from './HomeTabs';
import Checking from '../screens/Checking/Checking';
import Saving from '../screens/Saving/Saving';
import screens from '../constants/screens';

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Home" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home Logo';
    case 'Checking':
      return 'Checking';
    case 'Giving':
      return 'Giving';
    case 'Payments':
      return 'Payments';
    case 'Cards':
      return 'Cards';
  }
}

function AppNavigationContainer({ navigation }) {
  const Stack = createStackNavigator();
  const JWT_TOKEN = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screens.HOME}
          component={HomeTabs}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name={screens.CHECKING}
          component={Checking}
          options={() => ({
            headerLeft: () => <BackButton />,
            headerRight: () => <UserIcon />,
          })}
        />
        <Stack.Screen
          name={screens.SAVING}
          component={Saving}
          options={() => ({
            headerLeft: () => <BackButton />,
            headerRight: () => <UserIcon />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigationContainer;
