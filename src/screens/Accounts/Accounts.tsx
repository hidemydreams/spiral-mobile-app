import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import AccountsListItem from '../../components/AccountsListItem/AccountsListItem';
import AvailableCash from '../../components/AvailableCash/AvailableCash';
import { DarkText, GreyText } from '../../components/styledComponents';
import { styles } from './styles';
import { useTheme } from 'react-native-elements';
import { AccountsListItemData, IAccountsListItem } from '../../data/data';
const SEND_ICON = require('../../assets/images/circleButtonSend.png');
const PAY_ICON = require('../../assets/images/circleButtonPay.png');
const TRANSFER_ICON = require('../../assets/images/circleButtonSend.png');

function Accounts() {
  const { theme } = useTheme();

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

  const availableFundsStyles = {
    fontSize: 16,
    marginTop: 3,
    color: theme.colors.grey,
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar />
        <View style={[theme.layout.container, styles.container]}>
          <AvailableCash style={availableFundsStyles} />
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
            ItemSeparatorComponent={
              Platform.OS !== 'android' &&
              (() => <View style={styles.separator} />)
            }
            data={AccountsListItemData}
            renderItem={renderAccountsListItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Accounts;
