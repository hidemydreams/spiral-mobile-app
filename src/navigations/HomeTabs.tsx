import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Accounts from '../screens/Accounts/Accounts';
import Giving from '../screens/Giving/Giving';
import Payments from '../screens/Payments/Payments';
import Cards from '../screens/Cards/Cards';
import HomeStackNavigator from '../navigations/HomeStackNavigator';
import { Image, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import TapBar from '../components/TapBar/TapBar';
import screens from '../constants/screens';

function HomeTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          switch (route.name) {
            case screens.HOME:
              iconName = require('../assets/images/home.png');
              break;
            case screens.ACCOUNTS:
              iconName = require('../assets/images/accounts.png');
              break;
            case screens.GIVING:
              iconName = require('../assets/images/giving.png');
              break;
            case screens.PAYMENTS:
              iconName = require('../assets/images/payment.png');
              break;
            case screens.CARDS:
              iconName = require('../assets/images/cards.png');
              break;
            default:
              break;
          }
          return <Image source={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'rgb(215, 51, 116)',
        style: {
          backgroundColor: 'rgba(255, 255, 255)',
        },
      }}
      tabBar={props => (
        <>
          <BlurView
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            }}
            blurType="light"
            blurAmount={50}>
            <View
              style={{
                position: 'absolute',
                width: 400,
                height: 100,
                backgroundColor: 'white',
                bottom: 0,
                left: 0,
                zIndex: -1,
              }}
            />
            <BottomTabBar {...props} />
            <View
              style={{
                position: 'absolute',
                width: 200,
                height: 40,
                backgroundColor: 'pink',
                bottom: 10,
                left: 100,
                zIndex: -1,
              }}
            />
          </BlurView>
        </>
      )}>
      <Tab.Screen name={screens.HOME} component={HomeStackNavigator} />
      <Tab.Screen name={screens.ACCOUNTS} component={Accounts} />
      <Tab.Screen name={screens.GIVING} component={Giving} />
      <Tab.Screen name={screens.PAYMENTS} component={Payments} />
      <Tab.Screen name={screens.CARDS} component={Cards} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
