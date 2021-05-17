import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import screens from '../../constants/screens';
import BackButton from '../../components/shared/BackButton';
import Logo from '../../components/shared/Logo';
import UserIcon from '../../components/shared/UserIcon';

const Stack = createStackNavigator();

function CardsStack({ navigation }: Props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.CARDS}
        component={Cards}
        options={{
          headerLeft: () => <BackButton navigation={navigation} />,
          headerTitle: () => <Logo />,
          headerRight: () => <UserIcon />,
        }}
      />
    </Stack.Navigator>
  );
}

function Cards() {
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

export default CardsStack;
