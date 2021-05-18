import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderLeft from '../../components/shared/HeaderLeft';
import HeaderTitle from '../../components/shared/HeaderTitle';
import HeaderRight from '../../components/shared/HeaderRight';
import screens from '../../constants/screens';
import { useTheme } from 'react-native-elements';

const GivingStack = ({ route }) => {
  const Stack = createStackNavigator();
  const { theme } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.GIVING}
        component={Giving}
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
};

function Giving() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Coming soon</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default GivingStack;
