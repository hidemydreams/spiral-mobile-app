import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    paddingVertical: 10,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    alignContent: 'flex-end',
  },
  bottomContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'flex-end',
    position: 'relative',
  },
  bottomButton: {
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: 'rgb(41,41,41)',
  },
  bottomButtonText: {
    marginHorizontal: 10,
  },
  testText: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 0,
  },
  inputLabel: {
    marginBottom: 5,
  },
  errorMessage: {
    textAlign: 'center',
    color: '#fc4c4c',
    fontWeight: '500',
  },
  forgottenPassword: {
    fontWeight: '700',
    textAlign: 'right',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    color: 'rgb(215, 51, 116)',
  },
  loginUnderline: {
    width: 70,
    height: 3,
    backgroundColor: 'rgb(215, 51, 116)',
    marginTop: 3,
  },
  loginTitle: {
    fontWeight: '700',
    marginTop: 50,
    fontSize: 25,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
});
