import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { DarkText, Card } from '../styledComponents';
import AccountsListItem from '../AccountsListItem/AccountsListItem';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './styles';
import AvailableCash from '../AvailableCash/AvailableCash';
import { AccountsListItemData, IAccountsListItem } from '../../data/data';

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
      <AvailableCash />
      <FlatList
        style={styles.flatList}
        renderItem={renderAccountsListItem}
        keyExtractor={item => item.id}
        data={AccountsListItemData}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </Card>
  );
}

export default AccountsOverview;
