import { StyleSheet } from 'react-native';
import theme from '../../theme/Theme';

export const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(183, 188, 193, 0.5)',
  },
  filterButton: {
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: theme.colors.grey,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  filterInput: {
    width: 200,
    height: 25,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    borderRadius: 20,
    paddingLeft: 10,
  },
  transactionDate: {
    marginBottom: 5,
    fontSize: 16,
  },
  transactionBlock: {
    marginBottom: 30,
  },
  filterRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: { fontSize: 14 },
});
