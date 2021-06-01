import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    marginBottom: 60,
    borderRadius: 500,
  },
  profileName: {
    marginBottom: 20,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  profileDate: {},
  button: {
    marginHorizontal: 5,
    borderRadius: 20,
    paddingHorizontal: 5,
  },
  buttonText: {
    paddingHorizontal: 10,
    fontWeight: '400',
    fontSize: 16,
  },
  inputContainer: {
    paddingHorizontal: 0,
  },
  inputLabel: {
    marginBottom: 5,
  },
  input: {
    width: 200,
  },
  dateTimePicker: { width: 200, marginHorizontal: 'auto' },
});
