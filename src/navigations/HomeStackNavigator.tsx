import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Checking from '../screens/Checking/Checking';
import Saving from '../screens/Saving/Saving';
import HomeStackScreen from '../screens/Home/Home';

function HomeTabs() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeStackScreen}
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

export default HomeTabs;
