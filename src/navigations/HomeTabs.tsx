import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import screens from '../constants/screens';
import styled from 'styled-components/native';
import { useTheme } from 'react-native-elements';
import AccountsStack from './AccountsNavigator';
import CardsStack from './CardsNavigator';
import GivingStack from './GivingNavigator';
import HomeStackNavigator from './HomeNavigator';
import PaymentsStack from './PaymentsNavigator';
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

const getTabBarIcon = route => {
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
};

function HomeTabs() {
  const Tab = createBottomTabNavigator();
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={screens.HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: () => getTabBarIcon(route),
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        style: {
          backgroundColor: theme.colors.light,
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
