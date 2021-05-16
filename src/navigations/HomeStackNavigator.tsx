import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Checking from '../screens/Checking/Checking';
import Saving from '../screens/Saving/Saving';

function HomeTabs() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Checking"
        component={Checking}
        options={{ title: 'My home' }}
      />
      <HomeStack.Screen name="Saving" component={Saving} />
    </HomeStack.Navigator>
  );
}

export default HomeTabs;
