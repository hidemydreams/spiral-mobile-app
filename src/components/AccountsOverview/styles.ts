import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20,
    textAlign: 'center',
    overflow: 'hidden',
    width: '100%',
    borderColor: 'rgba(183, 188, 193, 0.5)',
    borderWidth: 1,
  },
  touchableOpacity: {
    width: '100%',
  },
  cardTitle: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 15,
    fontWeight: '400',
  },
  itemSubTitle: {
    fontSize: 16,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(183, 188, 193, 0.5)',
  },
  flatList: {
    width: '100%',
  },
});
