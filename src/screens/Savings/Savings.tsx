import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import AvailableCash from '../../components/AvailableCash/AvailableCash';
import { useTheme } from 'react-native-elements';
import { DarkText, StyledTextAccent } from '../../components/styledComponents';
import SearchBar from '../../components/SearchBar/SearchBar';

function Savings() {
  const { theme } = useTheme();

  return (
    <SafeAreaView>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Savings;
