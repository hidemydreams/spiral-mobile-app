import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { useTheme } from 'react-native-elements';
import HeaderLeft from '../components/shared/HeaderLeft/HeaderLeft';
import HeaderTitle from '../components/shared/HeaderTitle/HeaderTitle';
import HeaderRight from '../components/shared/HeaderRight/HeaderRight';
import screens from '../constants/screens';
import Savings from '../screens/Savings/Savings';
import { RootStackParamList } from '../types/types';

type savingsProps = StackScreenProps<RootStackParamList, 'Savings'>;

function SavingsStack({ route }: savingsProps) {
  const { subtitle } = route.params;
  const Stack = createStackNavigator();
  const { theme } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.SAVINGS}
        component={Savings}
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

export default SavingsStack;
