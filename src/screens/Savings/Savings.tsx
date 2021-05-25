import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import AvailableCash from '../../components/AvailableCash/AvailableCash';
import { useTheme } from 'react-native-elements';
import { DarkText, StyledTextAccent } from '../../components/styledComponents';
import SearchBar from '../../components/SearchBar/SearchBar';
import SavingsItem from '../../components/SavingsItem/SavingsItem';
import { styles } from './styles';

function Savings() {
  const { theme } = useTheme();

  const availableFundsStyles = {
    subtitle: {
      fontSize: 16,
      marginTop: 5,
      color: theme.colors.grey,
    },
    title: {
      marginTop: 50,
    },
  };

  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }}>
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <AvailableCash style={availableFundsStyles} />
          <Image
            style={{
              maxWidth: '100%',
            }}
            source={require('../../assets/images/savingsGraphV2.png')}
          />
        </View>
      </View>
      <View style={theme.layout.container}>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <DarkText style={{ fontSize: 18 }}>Total interest gained</DarkText>
            <StyledTextAccent>+ $50.00</StyledTextAccent>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <DarkText style={{ fontSize: 18 }}>Total interest gained</DarkText>
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
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <DarkText style={{ fontSize: 15, padding: 11 }}>
              End Day Balance - July 11
            </DarkText>
            <DarkText style={{ fontSize: 15, padding: 11, fontWeight: '500' }}>
              $5.000
            </DarkText>
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
