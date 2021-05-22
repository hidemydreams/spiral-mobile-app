import React, { ReactElement } from 'react';
import { Platform, View } from 'react-native';
import { DarkText, Card } from '../styledComponents';
import AccountsListItem from '../AccountsListItem';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './styles';
import screens from '../../constants/screens';

interface IAccountsListItem {
  id: number;
  title: string;
  subtitle: string;
  cash: {
    banknotes: string;
    cents: string;
  };
  icon?: string;
  navigateTo?: string;
  additionalInfo?: string;
}

const DATA: IAccountsListItem = [
  {
    id: 1,
    title: 'Checking',
    subtitle: 'Main Account (...0353)',
    cash: {
      banknotes: '1,500',
      cents: '20',
    },
    navigateTo: screens.CHECKING,
    additionalInfo: 'Some text for another page',
  },
  {
    id: 2,
    title: 'Savings',
    subtitle: 'Buy a house (...4044)',
    cash: {
      banknotes: '5,000',
      cents: '20',
    },
    navigateTo: screens.SAVING,
    additionalInfo: 'Some text for another page',
  },
  {
    id: 3,
    title: 'Goodness',
    subtitle: 'Cash Rewards',
    cash: {
      banknotes: '500',
      cents: '40',
    },
    icon: require('../../assets/images/heart.png'),
  },
];

function AccountsOverview(): ReactElement {
  const renderAccountsListItem = ({ item }: { item: IAccountsListItem }) => {
    return (
      <AccountsListItem
        title={item.title}
        subtitle={item.subtitle}
        banknotes={item.cash.banknotes}
        cents={item.cash.cents}
        icon={item.icon}
        navigateTo={item.navigateTo}
        additionalInfo={item.additionalInfo}
      />
    );
  };
  return (
    <Card style={styles.card}>
      <DarkText style={styles.cardTitle}>Accounts Overview</DarkText>
      <DarkText style={styles.cardAmount}>
        $7,000<DarkText>.80</DarkText>
      </DarkText>
      <DarkText style={styles.cardTotal}>Total Available Cash</DarkText>
      <FlatList
        style={styles.flatList}
        renderItem={renderAccountsListItem}
        keyExtractor={item => item.id}
        data={DATA}
        ItemSeparatorComponent={
          Platform.OS !== 'android' && (() => <View style={styles.separator} />)
        }
      />
    </Card>
  );
}

export default AccountsOverview;
