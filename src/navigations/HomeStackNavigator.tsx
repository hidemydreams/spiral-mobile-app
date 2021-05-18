import React, { ReactElement, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import screens from '../constants/screens';
import HeaderLeft from '../components/shared/HeaderLeft';
import HeaderTitle from '../components/shared/HeaderTitle';
import HeaderRight from '../components/shared/HeaderRight';

function HomeStackNavigator({ navigation, route }): ReactElement {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={screens.HOME}>
      <HomeStack.Screen
        name={screens.HOME}
        component={Home}
        options={{
          headerLeft: () => <HeaderLeft location={screens.HOME} />,
          headerTitle: () => <HeaderTitle />,
          headerRight: () => <HeaderRight />,
          headerStyle: {
            backgroundColor: 'rgb(215, 51, 116)',
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
