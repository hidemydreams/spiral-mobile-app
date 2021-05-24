import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderRadius: 15,
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
  icon: { width: 15, height: 15 },
  achievement: { textAlign: 'center', fontSize: 16, marginTop: 5 },
});
