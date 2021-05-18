import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import screens from '../../constants/screens';
import HeaderLeft from '../../components/shared/HeaderLeft';
import HeaderTitle from '../../components/shared/HeaderTitle';
import HeaderRight from '../../components/shared/HeaderRight';
import { createStackNavigator } from '@react-navigation/stack';

function PaymentsStack({ navigation, route }) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.PAYMENTS}
        component={Payments}
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
