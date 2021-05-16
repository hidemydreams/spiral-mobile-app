import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accounts from '../screens/Accounts/Accounts';
import Giving from '../screens/Giving/Giving';
import Payments from '../screens/Payments/Payments';
import Cards from '../screens/Cards/Cards';
import HomeStackNavigator from '../navigations/HomeStackNavigator';

function HomeTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home Screen"
        component={HomeStackNavigator}
        options={{ title: 'Home' }}
      />
      <Tab.Screen name="Accounts" component={Accounts} />
      <Tab.Screen name="Giving" component={Giving} />
      <Tab.Screen name="Payments" component={Payments} />
      <Tab.Screen name="Cards" component={Cards} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
