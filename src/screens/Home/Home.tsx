import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
function Home({ navigation }: { navigation?: any }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => navigation.push('Saving', { fromScreen: 'Home' })}>
            <Text>Go to savings screen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Checking')}>
            <Text>Go to checking screen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
