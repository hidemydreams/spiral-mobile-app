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
import Payments from '../screens/Payments/Payments';
import { RootStackParamList } from '../types/types';

type paymentsProps = StackScreenProps<RootStackParamList, 'Payments'>;

function PaymentsStack({ route }: paymentsProps) {
  const Stack = createStackNavigator();
  const { theme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.PAYMENTS}
        component={Payments}
        options={{
          headerLeft: () => <HeaderLeft />,
          headerTitle: () => <HeaderTitle routeName={route.name} />,
          headerRight: () => <HeaderRight />,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default PaymentsStack;
