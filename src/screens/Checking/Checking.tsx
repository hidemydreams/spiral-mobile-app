import React from 'react';
import { SafeAreaView, View, TextInput, Platform } from 'react-native';
import AvailableCash from '../../components/AvailableCash/AvailableCash';
import { useTheme } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { DarkText, GreyText } from '../../components/styledComponents';
import { ScrollView } from 'react-native-gesture-handler';
import CheckingItem from '../../components/CheckingItem/CheckingItem';
import { styles } from './styles';
import { CheckingData } from '../../data/data';
import SearchBar from '../../components/SearchBar/SearchBar';

function Checking() {
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
    <>
      <ScrollView style={theme.layout.container}>
        <View>
          <AvailableCash style={availableFundsStyles} />
          <SearchBar />
          <View style={styles.transactionBlock}>
            <DarkText style={styles.transactionDate}>July 11</DarkText>
            <View style={styles.transactions}>
              {CheckingData.july11.map(item => {
                return (
                  <CheckingItem
                    title={item.title}
                    subtitle={item.subtitle}
                    banknotes={item.funds.banknotes}
                    cents={item.funds.cents}
                    isSpecial={item.isSpecial}
                    key={item.id}
                  />
                );
              })}
            </View>
          </View>
          <View style={styles.transactionBlock}>
            <DarkText style={styles.transactionDate}>July 12</DarkText>
            <View style={styles.transactions}>
              {CheckingData.july12.map(item => {
                return (
                  <CheckingItem
                    title={item.title}
                    subtitle={item.subtitle}
                    banknotes={item.funds.banknotes}
                    cents={item.funds.cents}
                    isSpecial={item.isSpecial}
                    key={item.id}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Checking;
