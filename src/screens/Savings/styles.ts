import { StyleSheet } from 'react-native';
import theme from '../../theme/Theme';

export const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.background },
  graphBg: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphImage: {
    maxWidth: '100%',
  },
  pointsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  depositBlock: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(183, 188, 193, 0.5)',
    marginBottom: 40,
  },
  depositBlockTitle: {
    borderBottomWidth: 1,
    borderColor: 'rgba(183, 188, 193, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  depositBlockText: { fontSize: 15, padding: 11 },
  pointsText: { fontSize: 18 },
  pointsBlock: { marginTop: 20 },
});
