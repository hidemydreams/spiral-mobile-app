import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import AvailableCash from '../../components/AvailableCash/AvailableCash';
import { useTheme } from 'react-native-elements';
import { DarkText, StyledTextAccent } from '../../components/styledComponents';
import SearchBar from '../../components/SearchBar/SearchBar';
import SavingsItem from '../../components/SavingsItem/SavingsItem';

function Savings() {
  const { theme } = useTheme();

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <AvailableCash />
          <Image source={require('../../assets/images/savingsGraphV2.png')} />
        </View>
      </View>
      <View style={theme.layout.container}>
        <View>
          <View>
            <DarkText>Total interest gained</DarkText>
            <StyledTextAccent>+ $50.00</StyledTextAccent>
          </View>
          <View>
            <DarkText>Total interest gained</DarkText>
            <StyledTextAccent>+ $50.00</StyledTextAccent>
          </View>
        </View>
        <SearchBar />
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: 'rgba(183, 188, 193, 0.5)',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'rgba(183, 188, 193, 0.5)',
            }}>
            <DarkText>End Day Balance - July 11</DarkText>
            <DarkText>$5.000</DarkText>
          </View>
          <SavingsItem />
          <SavingsItem />
          <SavingsItem />
          <SavingsItem />
          <SavingsItem />
        </View>
      </View>
    </ScrollView>
  );
}

export default Savings;
