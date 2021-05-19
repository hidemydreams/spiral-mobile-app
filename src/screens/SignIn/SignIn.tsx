import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { signIn } from '../../redux/actions/loginActions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

function SignIn() {
  const [login, setLogin] = useState('Hello');
  const [password, setPassword] = useState('Password');
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.loginReducer?.loading);
  console.log(isLoading);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>This login screen</Text>
          <Input
            placeholder="Login"
            value={login}
            onChangeText={login => setLogin(login)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={password => setPassword(password)}
          />
          <Button
            title={isLoading ? 'Loading' : 'Sign Up'}
            onPress={() => dispatch(signIn(login, password))}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;
