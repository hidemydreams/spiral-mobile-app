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
import Checking from '../screens/Checking/Checking';
import { RootStackParamList } from '../types/types';

type checkingProps = StackScreenProps<RootStackParamList, 'Checking'>;

function CheckingStack({ route }: checkingProps) {
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
