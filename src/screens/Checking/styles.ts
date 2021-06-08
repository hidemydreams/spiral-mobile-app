import { StyleSheet } from 'react-native';
import theme from '../../theme/Theme';

export const styles = StyleSheet.create({
  filterButton: {
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: theme.colors.grey,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  filterInput: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    borderRadius: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  transactionDate: {
    marginBottom: 5,
    fontSize: 16,
    marginLeft: 15,
  },
  transactionBlock: {
    marginBottom: 30,
  },
  filterRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  buttonText: { fontSize: 14 },
  transactions: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(183, 188, 193, 0.5)',
  },
});
