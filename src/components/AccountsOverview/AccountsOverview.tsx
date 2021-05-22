import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { DarkText, Card } from '../styledComponents';
import AccountsListItem from '../AccountsListItem';

function AccountsOverview(): ReactElement {
  return (
    <Card style={styles.card}>
      <DarkText style={styles.cardTitle}>Accounts Overview</DarkText>
      <DarkText style={styles.cardAmount}>
        $7,000<DarkText>.80</DarkText>
      </DarkText>
      <DarkText style={styles.cardTotal}>Total Available Cash</DarkText>
      <AccountsListItem />
      <AccountsListItem />
      <AccountsListItem />
    </Card>
  );
}

export default AccountsOverview;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20,
    textAlign: 'center',
    overflow: 'hidden',
    width: '100%',
    borderColor: 'rgba(183, 188, 193, 0.5)',
    borderWidth: 1,
  },
  touchableOpacity: {
    width: '100%',
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
