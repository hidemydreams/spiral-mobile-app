import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderLeft from '../../components/shared/HeaderLeft';
import HeaderTitle from '../../components/shared/HeaderTitle';
import HeaderRight from '../../components/shared/HeaderRight';
import screens from '../../constants/screens';

const Stack = createStackNavigator();

const GivingStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.GIVING}
        component={Giving}
        options={{
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerTitle: () => <HeaderTitle routeName={route.name} />,
          headerRight: () => <HeaderRight />,
          headerStyle: {
            backgroundColor: 'rgb(215, 51, 116)',
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
