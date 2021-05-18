import React, { ReactElement, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import screens from '../constants/screens';
import BackButton from '../components/shared/BackButton';
import Logo from '../components/shared/Logo';
import UserIcon from '../components/shared/UserIcon';

function HomeStackNavigator({ navigation, route }): ReactElement {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={screens.HOME}>
      <HomeStack.Screen
        name={screens.HOME}
        component={Home}
        options={{
          headerLeft: () => <BackButton location={screens.HOME} />,
          headerTitle: () => <Logo />,
          headerRight: () => <UserIcon />,
          headerStyle: {
            backgroundColor: 'rgb(215, 51, 116)',
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
