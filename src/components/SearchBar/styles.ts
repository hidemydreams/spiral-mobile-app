import { StyleSheet } from 'react-native';
import theme from '../../theme/Theme';

export const styles = StyleSheet.create({
  filterButton: {
    borderRadius: 50,
    borderColor: theme.colors.grey,
    backgroundColor: 'transparent',
    borderWidth: 1,
    height: 35,
  },
  filterInput: {
    width: 280,
    height: 35,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    borderRadius: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
  },
  filterRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  buttonText: { fontSize: 14 },
});
