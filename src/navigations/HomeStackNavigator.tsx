import React, { ReactElement, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Checking from '../screens/Checking/Checking';
import Saving from '../screens/Saving/Saving';
import Home from '../screens/Home/Home';
const HomeStack = createStackNavigator();
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import screens from '../constants/screens';
import BackButton from '../components/shared/BackButton';
import Logo from '../components/shared/Logo';
import UserIcon from '../components/shared/UserIcon';

function HomeStackNavigator({ navigation, route }): ReactElement {
  console.log(navigation.dangerouslyGetParent());
  // Hiding bottom TabBar on the screens that are not Home screen
  const routeName = getFocusedRouteNameFromRoute(route) ?? screens.HOME;
  useEffect(() => {
    navigation.setOptions({
      tabBarVisible: routeName === screens.HOME,
    });
  }, [navigation, routeName]);

  return (
    <HomeStack.Navigator initialRouteName={screens.HOME}>
      <HomeStack.Screen
        name={screens.HOME}
        component={Home}
        options={{
          headerLeft: () => <BackButton />,
          headerTitle: () => <Logo />,
          headerRight: () => <UserIcon />,
        }}
      />
      <HomeStack.Screen
        name={screens.CHECKING}
        component={Checking}
        options={{
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: () => <Logo routeName={route.name} />,
          headerRight: () => <UserIcon />,
        }}
      />
      <HomeStack.Screen
        name={screens.SAVING}
        component={Saving}
        options={{
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: () => <Logo routeName={route.name} />,
          headerRight: () => <UserIcon />,
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
