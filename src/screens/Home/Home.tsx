import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HomeStackScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
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
