import React from 'react';
import { View, StatusBar, Image, FlatList, Platform } from 'react-native';
import AccountsListItem from '../../components/AccountsListItem/AccountsListItem';
import AvailableCash from '../../components/AvailableCash/AvailableCash';
import { GreyText } from '../../components/styledComponents';
import { styles } from './styles';
import { AccountsListItemData, IAccountsListItem } from '../../data/data';
const SEND_ICON = require('../../assets/images/circleButtonSend.png');
const PAY_ICON = require('../../assets/images/circleButtonPay.png');
const TRANSFER_ICON = require('../../assets/images/circleButtonSend.png');

function Accounts() {
  const borderStyle = {
    borderWidth: 1,
    borderColor: 'rgba(183, 188, 193, 0.3)',
  };

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
        achievement={item.achievement}
        style={borderStyle}
      />
    );
  };

  return (
    <View>
      <StatusBar />
      <AvailableCash
        titleStyle={styles.title}
        subtitleStyle={styles.subtitle}
      />
      <View style={styles.iconsRow}>
        <View style={styles.iconContainer}>
          <Image source={SEND_ICON} />
          <GreyText style={styles.iconText}>Send</GreyText>
        </View>
        <View style={styles.iconContainer}>
          <Image source={PAY_ICON} />
          <GreyText style={styles.iconText}>Pay</GreyText>
        </View>
        <View style={styles.iconContainer}>
          <Image source={TRANSFER_ICON} />
          <GreyText style={styles.iconText}>Transfer</GreyText>
        </View>
      </View>
      <FlatList
        style={styles.flatList}
        ItemSeparatorComponent={
          Platform.OS !== 'android' && (() => <View style={styles.separator} />)
        }
        data={AccountsListItemData}
        renderItem={renderAccountsListItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Accounts;
