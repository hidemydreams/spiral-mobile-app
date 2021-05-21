import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import screens from '../../constants/screens';
import HeaderLeft from '../../components/shared/HeaderLeft';
import HeaderRight from '../../components/shared/HeaderRight';
import HeaderTitle from '../../components/shared/HeaderTitle';
import {
  StyledText,
  HomeScreen,
  PaperBlock,
  AccountsOverview,
} from './HomeStyles';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
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
          onPress={() =>
            navigation.navigate('Saving', { subtitle: 'Some text' })
          }>
          <StyledText>Go to savings screen</StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Checking', { subtitle: 'Some text' })
          }>
          <StyledText>Go to checking screen</StyledText>
        </TouchableOpacity>
      </PaperBlock>
    </HomeScreen>
  );
}

export default Home;
