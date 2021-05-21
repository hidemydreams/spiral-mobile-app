import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-elements';
import HeaderLeft from '../components/shared/HeaderLeft';
import HeaderTitle from '../components/shared/HeaderTitle';
import HeaderRight from '../components/shared/HeaderRight';
import screens from '../constants/screens';
import Checking from '../screens/Checking/Checking';

function CheckingStack({ route }) {
  const { subtitle } = route.params;
  const Stack = createStackNavigator();
  const { theme } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.CHECKING}
        component={Checking}
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

export default CheckingStack;
