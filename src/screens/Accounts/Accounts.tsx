import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import screens from '../../constants/screens';
import HeaderLeft from '../../components/shared/HeaderLeft';
import HeaderTitle from '../../components/shared/HeaderTitle';
import HeaderRight from '../../components/shared/HeaderRight';

const Stack = createStackNavigator();

function AccountsStack({ navigation, route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.ACCOUNTS}
        component={Accounts}
        options={{
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle routeName={route.name} />,
          headerRight: () => <HeaderRight />,
          headerStyle: {
            backgroundColor: 'rgb(215, 51, 116)',
          },
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
