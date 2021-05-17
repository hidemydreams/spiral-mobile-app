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
import { Image } from 'react-native';
import { BlurView } from '@react-native-community/blur';

function HomeTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = require('../assets/images/home.png');
              break;
            case 'Accounts':
              iconName = require('../assets/images/accounts.png');
              break;
            case 'Giving':
              iconName = require('../assets/images/giving.png');
              break;
            case 'Payments':
              iconName = require('../assets/images/payment.png');
              break;
            case 'Cards':
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
          backgroundColor: 'transparent',
        },
      }}
      tabBar={props => (
        <BlurView
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          blurType="light"
          blurAmount={100}
          blurRadius={100}
          overlayColor="rgb(215, 51, 116)">
          <BottomTabBar {...props} />
        </BlurView>
      )}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Accounts" component={Accounts} />
      <Tab.Screen name="Giving" component={Giving} />
      <Tab.Screen name="Payments" component={Payments} />
      <Tab.Screen name="Cards" component={Cards} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
