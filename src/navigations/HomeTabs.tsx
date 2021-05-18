import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../navigations/HomeStackNavigator';
import { Image } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import screens from '../constants/screens';
import GivingStack from '../screens/Giving/Giving';
import PaymentsStack from '../screens/Payments/Payments';
import CardsStack from '../screens/Cards/Cards';
import AccountsStack from '../screens/Accounts/Accounts';
import styled from 'styled-components/native';
import { useTheme } from 'react-native-elements';

const BluredView = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  bottom: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;

const BluredOverlay = styled.View`
  position: absolute;
  width: 200px;
  height: 40px;
  background-color: pink;
  bottom: 10px;
  left: 25%;
  z-index: -1;
`;

function HomeTabs() {
  const Tab = createBottomTabNavigator();
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={screens.HOME}
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
        activeTintColor: theme.colors.primary,
        style: {
          backgroundColor: 'rgba(255, 255, 255)',
        },
      }}
      tabBar={props => (
        <>
          <BlurView
            style={theme.layout.absolutePos}
            blurType="light"
            blurAmount={50}>
            <BluredView />
            <BottomTabBar {...props} />
            <BluredOverlay />
          </BlurView>
        </>
      )}>
      <Tab.Screen name={screens.HOME} component={HomeStackNavigator} />
      <Tab.Screen name={screens.ACCOUNTS} component={AccountsStack} />
      <Tab.Screen name={screens.GIVING} component={GivingStack} />
      <Tab.Screen name={screens.PAYMENTS} component={PaymentsStack} />
      <Tab.Screen name={screens.CARDS} component={CardsStack} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
