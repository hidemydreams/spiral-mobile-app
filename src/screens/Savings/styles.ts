import { StyleSheet } from 'react-native';
import theme from '../../theme/Theme';

export const styles = StyleSheet.create({
  container: { backgroundColor: theme.colors.background },
  graphBg: {
    backgroundColor: 'white',
    flex: 1,
  },
  pointsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  graphImage: {
    resizeMode: 'contain',
    maxWidth: '100%',
  },
  depositBlock: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(183, 188, 193, 0.5)',
    marginBottom: 40,
    marginTop: -20,
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
  imageContainer: {
    backgroundColor: 'red',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
    color: theme.colors.grey,
  },
  title: {
    marginTop: 50,
  },
});
