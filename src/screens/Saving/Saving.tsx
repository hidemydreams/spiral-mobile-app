import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import screens from '../../constants/screens';
import HeaderLeft from '../../components/shared/HeaderLeft';
import HeaderTitle from '../../components/shared/HeaderTitle';
import HeaderRight from '../../components/shared/HeaderRight';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-elements';

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

function SavingStack({ route }) {
  const { subtitle } = route.params;
  const Stack = createStackNavigator();
  const { theme } = useTheme();
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
            backgroundColor: theme.colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default SavingStack;
