import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import screens from '../../constants/screens';
import HeaderLeft from '../../components/shared/HeaderLeft';
import HeaderRight from '../../components/shared/HeaderRight';
import HeaderTitle from '../../components/shared/HeaderTitle';
import styled from 'styled-components/native';
import { StyledText } from './HomeStyles';

const HomeScreen = styled.View`
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 7px;
`;

const PaperBlock = styled.View`
  border-radius: 3px;
  background-color: white;
  border: 1px solid black;
`;

const AccountsOverview = styled.View`
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
`;

function Home({ navigation }: { navigation?: any }) {
  return (
    <HomeScreen>
      <StatusBar barStyle="light-content" />
      <StyledText>Hello User | Jul 12, 2020</StyledText>
      <PaperBlock>
        <AccountsOverview>
          <StyledText>Accounts Overview</StyledText>
          <StyledText>
            $7,000<StyledText>.80</StyledText>
          </StyledText>
          <StyledText>Total Available Cash</StyledText>
        </AccountsOverview>
        <TouchableOpacity
          onPress={() => navigation.push('Saving', { fromScreen: 'Home' })}>
          <StyledText>Go to savings screen</StyledText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Checking')}>
          <StyledText>Go to checking screen</StyledText>
        </TouchableOpacity>
      </PaperBlock>
    </HomeScreen>
  );
}

function HomeStackNavigator(): ReactElement {
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
