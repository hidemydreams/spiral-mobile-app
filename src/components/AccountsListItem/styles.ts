import { Image, View, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
