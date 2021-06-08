import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  userMenuContent: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 70 : 55,
    right: 10,
    width: 100,
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  userMenuOverlay: StyleSheet.absoluteFillObject,
  headerRight: {
    paddingRight: 7,
  },
});

export default styles;
