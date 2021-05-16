import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StatusBar } from 'react-native';

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
