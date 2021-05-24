import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 15,
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
  depositAccentGreen: {
    color: '#91CCB2',
  },
  itemTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
});
