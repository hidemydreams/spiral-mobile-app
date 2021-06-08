import React from 'react';
import { SafeAreaView, View, TextInput, Platform } from 'react-native';
import AvailableCash from '../../components/AvailableCash/AvailableCash';
import { useTheme } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { DarkText, GreyText } from '../../components/styledComponents';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import CheckingItem from '../../components/CheckingItem/CheckingItem';
import { styles } from './styles';
import { CheckingData } from '../../data/data';

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

  const renderCheckingItems = (items: string) => {
    return CheckingData[items].map(item => {
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
    });
  };

  return (
    <SafeAreaView style={theme.layout.container}>
      <ScrollView>
        <View style={theme.layout.container}>
          <AvailableCash style={availableFundsStyles} />
          <View style={styles.filterRowContainer}>
            <TextInput
              style={styles.filterInput}
              placeholder="Search Transactions"
            />
            <Button
              title={<GreyText style={styles.buttonText}>Filter By</GreyText>}
              buttonStyle={styles.filterButton}
            />
          </View>
          <View style={styles.transactionBlock}>
            <DarkText style={styles.transactionDate}>July 11</DarkText>
            <View style={styles.transactions}>
              {renderCheckingItems('july11')}
            </View>
          </View>
          <View style={styles.transactionBlock}>
            <DarkText style={styles.transactionDate}>July 12</DarkText>
            <View style={styles.transactions}>
              {renderCheckingItems('july12')}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Checking;
