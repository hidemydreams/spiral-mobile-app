import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import screens from '../../constants/screens';
import BackButton from '../../components/shared/BackButton';
import Logo from '../../components/shared/Logo';
import UserIcon from '../../components/shared/UserIcon';

const Stack = createStackNavigator();

function AccountsStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.ACCOUNTS}
        component={Accounts}
        options={{
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: () => <Logo />,
          headerRight: () => <UserIcon />,
        }}
      />
    </Stack.Navigator>
  );
}

function Accounts() {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar />
        <View>
          <Text>Accounts screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AccountsStack;
