import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BackButton from '../../components/shared/BackButton';
import Logo from '../../components/shared/Logo';
import UserIcon from '../../components/shared/UserIcon';
import screens from '../../constants/screens';

const Stack = createStackNavigator();

const GivingStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.GIVING}
        component={Giving}
        options={{
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: () => <Logo />,
          headerRight: () => <UserIcon />,
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
