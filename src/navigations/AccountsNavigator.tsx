import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-elements';
import HeaderLeft from '../components/shared/HeaderLeft';
import HeaderTitle from '../components/shared/HeaderTitle';
import HeaderRight from '../components/shared/HeaderRight';
import screens from '../constants/screens';
import Accounts from '../screens/Accounts/Accounts';

function AccountsStack({ route }) {
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
