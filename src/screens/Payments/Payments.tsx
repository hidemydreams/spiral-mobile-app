import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import screens from '../../constants/screens';
import BackButton from '../../components/shared/BackButton';
import Logo from '../../components/shared/Logo';
import UserIcon from '../../components/shared/UserIcon';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function PaymentsStack({ navigation, route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.PAYMENTS}
        component={Payments}
        options={{
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: () => <Logo routeName={route.name} />,
          headerRight: () => <UserIcon />,
        }}
      />
    </Stack.Navigator>
  );
}

function Payments() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Coming soon</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PaymentsStack;
