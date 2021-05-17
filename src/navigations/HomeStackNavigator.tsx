import React, { ReactElement, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Checking from '../screens/Checking/Checking';
import Saving from '../screens/Saving/Saving';
import Home from '../screens/Home/Home';
const HomeStack = createStackNavigator();
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

function HomeStackNavigator({ navigation, route }): ReactElement {
  // Hiding bottom TabBar on the screens that are not Home screen
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  useEffect(() => {
    navigation.setOptions({
      tabBarVisible: routeName === 'Home',
    });
  }, [navigation, routeName]);

  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <HomeStack.Screen
        name="Checking"
        component={Checking}
        options={{ title: 'Checking' }}
      />
      <HomeStack.Screen
        name="Saving"
        component={Saving}
        options={{ title: 'Saving' }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
