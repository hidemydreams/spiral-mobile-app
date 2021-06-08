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
import Cards from '../screens/Cards/Cards';
import { RootStackParamList } from '../types/types';

type cardsProps = StackScreenProps<RootStackParamList, 'Cards'>;

function CardsStack({ route }: cardsProps) {
  const Stack = createStackNavigator();
  const { theme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.CARDS}
        component={Cards}
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

export default CardsStack;
