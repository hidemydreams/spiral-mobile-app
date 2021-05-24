import React from 'react';
import { SafeAreaView, View, TextInput, Platform } from 'react-native';
import AvailableCash from '../../components/AvailableCash/AvailableCash';
import { useTheme } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { DarkText, GreyText } from '../../components/styledComponents';
import { FlatList } from 'react-native-gesture-handler';
import CheckingItem from '../../components/CheckingItem/CheckingItem';
import { styles } from './styles';

const CheckingData = {
  july11: [
    {
      id: 1,
      title: 'Target',
      subtitle: 'Closter NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isDeposit: false,
    },
    {
      id: 2,
      title: 'Target',
      subtitle: 'Closter NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isDeposit: false,
    },
    {
      id: 3,
      title: 'Target',
      subtitle: 'Closter NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isDeposit: false,
    },
    {
      id: 4,
      title: 'Target',
      subtitle: 'Closter NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isDeposit: false,
    },
  ],
  july12: [
    {
      id: 1,
      title: 'Target',
      subtitle: 'Closter NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isDeposit: false,
    },
    {
      id: 2,
      title: 'Target',
      subtitle: 'Closter NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isDeposit: false,
    },
    {
      id: 3,
      title: 'Target',
      subtitle: 'Closter NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isDeposit: false,
    },
    {
      id: 4,
      title: 'Target',
      subtitle: 'Closter NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isDeposit: false,
    },
  ],
};

function Checking() {
  const renderCheckingItem = ({ item }: { item: IAccountsListItem }) => {
    return (
      <CheckingItem
        title={item.title}
        subtitle={item.subtitle}
        banknotes={item.funds.banknotes}
        cents={item.funds.cents}
        isDeposit={item.isDeposit}
      />
    );
  };
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
    <SafeAreaView style={theme.layout.container}>
      <AvailableCash style={availableFundsStyles} />
      <View style={styles.filterRowContainer}>
        <TextInput style={styles.filterInput} />
        <Button
          title={<GreyText style={styles.buttonText}>Filter By</GreyText>}
          buttonStyle={styles.filterButton}
        />
      </View>
      <View style={styles.transactionBlock}>
        <DarkText style={styles.transactionDate}>July 11</DarkText>
        <FlatList
          renderItem={renderCheckingItem}
          keyExtractor={item => item.id}
          data={CheckingData.july11}
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (() => <View style={styles.separator} />)
          }
        />
      </View>
      <View style={styles.transactionBlock}>
        <DarkText style={styles.transactionDate}>July 12</DarkText>
        <FlatList
          renderItem={renderCheckingItem}
          keyExtractor={item => item.id}
          data={CheckingData.july12}
          ItemSeparatorComponent={
            Platform.OS !== 'android' &&
            (() => <View style={styles.separator} />)
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default Checking;
