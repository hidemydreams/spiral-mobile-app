import { StyleSheet } from 'react-native';
import theme from '../../theme/Theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 16,
    marginTop: 5,
  },
  separator: {
    marginVertical: 10,
  },
  flatList: { paddingHorizontal: 10 },
  title: {
    marginTop: 50,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
    color: theme.colors.grey,
  },
});
