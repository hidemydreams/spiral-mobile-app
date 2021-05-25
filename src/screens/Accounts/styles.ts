import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
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
});