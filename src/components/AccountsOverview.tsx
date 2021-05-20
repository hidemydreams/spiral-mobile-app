import React, { ReactElement } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { DarkText, GreyText, Card } from './styledComponents';
import { useTheme } from 'react-native-elements';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AccountsListItem from './AccountsListItem';
import { useNavigation } from '@react-navigation/native';

function AccountsOverview(): ReactElement {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <Card style={styles.card}>
      <DarkText style={styles.cardTitle}>Accounts Overview</DarkText>
      <DarkText style={styles.cardAmount}>
        $7,000<DarkText style={styles.cardAmountSmall}>.80</DarkText>
      </DarkText>
      <DarkText style={styles.cardTotal}>Total Available Cash</DarkText>
      <AccountsListItem />
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() =>
          navigation.navigate('Saving', { subtitle: 'Some text' })
        }>
        <AccountsListItem />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() =>
          navigation.navigate('Checking', { subtitle: 'Some text' })
        }>
        <AccountsListItem />
      </TouchableOpacity>
    </Card>
  );
}

export default AccountsOverview;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 5,
    textAlign: 'center',
    overflow: 'hidden',
  },
  touchableOpacity: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  cardAmount: {
    fontSize: 34,
  },
  cardTotal: {
    fontSize: 22,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 15,
    fontWeight: '400',
  },
  itemSubTitle: {
    fontSize: 16,
  },
});
