import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import screens from '../../constants/screens';
import HeaderLeft from '../../components/shared/HeaderLeft';
import HeaderTitle from '../../components/shared/HeaderTitle';
import HeaderRight from '../../components/shared/HeaderRight';
import { createStackNavigator } from '@react-navigation/stack';

function Saving() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Savings stack from home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SavingStack({ navigation, route }) {
  const { subtitle } = route.params;
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.SAVING}
        component={Saving}
        options={{
          headerLeft: () => <HeaderLeft />,
          headerTitle: () => (
            <HeaderTitle routeName={route.name} subtitle={subtitle} />
          ),
          headerRight: () => <HeaderRight />,
          headerStyle: {
            backgroundColor: 'rgb(215, 51, 116)',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default SavingStack;
