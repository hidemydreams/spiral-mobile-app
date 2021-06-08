import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-elements';
import HeaderLeft from '../components/shared/HeaderLeft/HeaderLeft';
import HeaderRight from '../components/shared/HeaderRight/HeaderRight';
import HeaderTitle from '../components/shared/HeaderTitle/HeaderTitle';
import screens from '../constants/screens';
import Profile from '../screens/Profile/Profile';

function ProfileStack({ route }) {
  const Stack = createStackNavigator();
  const { theme } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.PROFILE}
        component={Profile}
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

export default ProfileStack;
