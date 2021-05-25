import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  savingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(183, 188, 193, 0.3)',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
  },
  cents: {
    fontSize: 16,
  },
});
