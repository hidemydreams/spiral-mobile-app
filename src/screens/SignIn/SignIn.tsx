import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { signIn } from '../../redux/actions/loginActions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useTheme } from 'react-native-elements';
import { DarkText } from '../../components/styledComponents';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

function SignIn() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { loading, authError } = useAppSelector(state => state.loginReducer);
  const { theme } = useTheme();

  return (
    <View style={theme.layout.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.loginTitle}>Login</Text>
          <View style={styles.loginUnderline} />
        </View>
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
        {authError ? (
          <Text style={styles.errorMessage}>{authError}</Text>
        ) : null}
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
            loading ? <ActivityIndicator size="small" color="white" /> : 'LOGIN'
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
                <Text style={styles.bottomButtonText}>Touch ID</Text>
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
                <Text style={styles.bottomButtonText}>Face ID</Text>
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

export default SignIn;
