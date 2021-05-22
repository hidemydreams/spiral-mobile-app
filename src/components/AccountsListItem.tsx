import React, { ReactElement } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { DarkText, GreyText } from './styledComponents';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function AccountsListItem({
  title,
  subtitle,
  banknotes,
  cents,
  icon,
  navigateTo,
  additionalInfo,
}): ReactElement {
  const { theme } = useTheme();
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.itemWrapper}>
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            navigation.navigate(navigateTo, { subtitle: additionalInfo })
          }>
          <View>
            <DarkText style={styles.itemTitle}>
              {title} <Image source={icon} />
            </DarkText>
            <GreyText style={styles.itemSubTitle}>{subtitle}</GreyText>
          </View>
          <View style={styles.itemRight}>
            <DarkText style={styles.amountBig}>
              ${banknotes}
              <DarkText style={styles.amountSmall}>.{cents}</DarkText>
            </DarkText>
            <MaterialIcons
              name="chevron-right"
              color={theme.colors.primary}
              size={30}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    </>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    alignSelf: 'stretch',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
    marginTop: 15,
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
