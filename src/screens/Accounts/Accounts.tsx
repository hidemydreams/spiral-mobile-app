import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import screens from '../../constants/screens';
import HeaderLeft from '../../components/shared/HeaderLeft';
import HeaderTitle from '../../components/shared/HeaderTitle';
import HeaderRight from '../../components/shared/HeaderRight';
import { useTheme } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { DarkText } from '../../components/styledComponents';

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

function Accounts() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar />
        <View>
          <Text>Accounts screen</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Saving', { subtitle: 'Some text' })
            }>
            <DarkText>Go to savings screen</DarkText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Checking', { subtitle: 'Some text' })
            }>
            <DarkText>Go to checking screen</DarkText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AccountsStack;
