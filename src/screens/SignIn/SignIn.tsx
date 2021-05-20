import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { signIn } from '../../redux/actions/loginActions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useTheme } from 'react-native-elements';
import { DarkText, StyledTextPrimary } from '../../components/styledComponents';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function SignIn() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.loginReducer?.loading);
  const error = useAppSelector(state => state.loginReducer?.authError);
  const { theme } = useTheme();

  const LoginUnderline = styled.View`
    width: 50px;
    height: 3px;
    background-color: 'rgb(215, 51, 116)';
    margin-top: 3px;
  `;

  const LoginTitle = styled(DarkText)`
    font-weight: 700;
    margin-top: 50px;
  `;

  const Header = styled.View`
    margin-top: 20px;
    margin-bottom: 40px;
  `;
  return (
    <View style={theme.layout.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <ScrollView>
        <Header>
          <LoginTitle>Login</LoginTitle>
          <LoginUnderline />
        </Header>
        <View>
          <DarkText style={styles.inputLabel}>Email</DarkText>
          <Input
            containerStyle={styles.inputContainer}
            placeholder="Your email address"
            value={login}
            onChangeText={(text: string) => setLogin(text)}
          />
        </View>
        <View>
          <DarkText style={styles.inputLabel}>Password</DarkText>
          <Input
            containerStyle={styles.inputContainer}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text: string) => setPassword(text)}
          />
        </View>
        {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
        <TouchableOpacity>
          <Text style={styles.forgottenPassword}>Forgot Password</Text>
        </TouchableOpacity>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
        <Button
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
          title={
            isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              'LOGIN'
            )
          }
          onPress={() => dispatch(signIn(login, password))}
        />
      </KeyboardAvoidingView>
      <View style={styles.bottomContainer}>
        <DarkText style={styles.testText}>Lets test two ways of login</DarkText>
        <View style={styles.buttonsContainer}>
          <Button
            buttonStyle={styles.bottomButton}
            title={
              <>
                <Text style={{ marginHorizontal: 5 }}>Touch ID</Text>
                <MaterialIcons
                  name="fingerprint"
                  color={theme.colors.dark}
                  size={30}
                />
              </>
            }
            type="outline"
          />
          <Button
            buttonStyle={styles.bottomButton}
            title={
              <>
                <Text style={{ marginHorizontal: 5 }}>Face ID</Text>
                <MaterialIcons
                  name="face"
                  color={theme.colors.dark}
                  size={30}
                />
              </>
            }
            type="outline"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default SignIn;
