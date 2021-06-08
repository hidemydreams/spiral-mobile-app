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
import Accounts from '../screens/Accounts/Accounts';
import { RootStackParamList } from '../types/types';

type accountsProps = StackScreenProps<RootStackParamList, 'Accounts'>;

function AccountsStack({ route }: accountsProps) {
  const { theme } = useTheme();
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.ACCOUNTS}
        component={Accounts}
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

export default AccountsStack;
