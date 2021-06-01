import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  userMenuContent: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 55,
    right: 10,
    width: 100,
  },
  userMenuOverlay: StyleSheet.absoluteFillObject,
  headerRight: {
    paddingRight: 7,
  },
  avatar: {},
});

export default styles;
