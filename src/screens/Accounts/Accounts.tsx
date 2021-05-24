import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { DarkText } from '../../components/styledComponents';

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

export default Accounts;
