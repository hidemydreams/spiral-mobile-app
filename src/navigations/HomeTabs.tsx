import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Image, Platform } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import screens from '../constants/screens';
import styled from 'styled-components/native';
import { useTheme } from 'react-native-elements';
import AccountsStack from './AccountsNavigator';
import CardsStack from './CardsNavigator';
import GivingStack from './GivingNavigator';
import HomeStackNavigator from './HomeNavigator';
import PaymentsStack from './PaymentsNavigator';
const HOME_ICON = require('../assets/images/home.png');
const ACCOUNTS_ICON = require('../assets/images/accounts.png');
const GIVING_ICON = require('../assets/images/giving.png');
const PAYMENTS_ICON = require('../assets/images/payment.png');
const CARD_ICON = require('../assets/images/cards.png');

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

const tabScreens = [
  { screenName: screens.HOME, component: HomeStackNavigator },
  { screenName: screens.ACCOUNTS, component: AccountsStack },
  { screenName: screens.GIVING, component: GivingStack },
  { screenName: screens.PAYMENTS, component: PaymentsStack },
  { screenName: screens.CARDS, component: CardsStack },
];

const getTabBarIcon = route => {
  let iconName;
  switch (route.name) {
    case screens.HOME:
      iconName = HOME_ICON;
      break;
    case screens.ACCOUNTS:
      iconName = ACCOUNTS_ICON;
      break;
    case screens.GIVING:
      iconName = GIVING_ICON;
      break;
    case screens.PAYMENTS:
      iconName = PAYMENTS_ICON;
      break;
    case screens.CARDS:
      iconName = CARD_ICON;
      break;
    default:
      break;
  }
  return <Image source={iconName} />;
};

function HomeTabs() {
  const { theme } = useTheme();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={screens.HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: () => getTabBarIcon(route),
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        style:
          Platform.OS === 'ios'
            ? {
                backgroundColor: theme.colors.light,
              }
            : null,
      }}
      tabBar={props => (
        <>
          {Platform.OS === 'ios' ? (
            <BlurView
              style={theme.layout.absolutePos}
              blurType="light"
              blurAmount={50}>
              <BluredView />
              <BottomTabBar {...props} />
              <BluredOverlay />
            </BlurView>
          ) : (
            <BottomTabBar {...props} />
          )}
        </>
      )}>
      {tabScreens.map(screen => {
        return (
          <Tab.Screen
            key={screen.screenName}
            name={screen.screenName}
            component={screen.component}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default HomeTabs;
