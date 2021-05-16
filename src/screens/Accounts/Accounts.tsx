import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Accounts() {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar />
        <View>
          <Text>Accounts screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Accounts;
