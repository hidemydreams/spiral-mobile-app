import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HomeStackScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>This is home screen</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Saving')}>
            <Text>Go to savings screen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Checking')}>
            <Text>Go to checking screen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeStackScreen;
