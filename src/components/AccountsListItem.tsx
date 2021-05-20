import React, { ReactElement } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { DarkText, GreyText } from './styledComponents';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'react-native-elements';

function AccountsListItem(): ReactElement {
  const { theme } = useTheme();
  return (
    <View style={styles.item}>
      <View>
        <DarkText style={styles.itemTitle}>Checking</DarkText>
        <GreyText style={styles.itemSubTitle}>Main account (...0353)</GreyText>
      </View>
      <View style={styles.itemRight}>
        <DarkText style={styles.amountBig}>
          $1.500<DarkText style={styles.amountSmall}>.20</DarkText>
        </DarkText>
        <MaterialIcons
          name="chevron-right"
          color={theme.colors.primary}
          size={30}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountBig: {
    fontSize: 22,
  },
  amountSmall: {
    fontSize: 16,
  },
  itemTitle: {
    fontSize: 18,
    marginBottom: 3,
    fontWeight: '400',
  },
  itemSubTitle: {
    fontSize: 16,
  },
});

export default AccountsListItem;
