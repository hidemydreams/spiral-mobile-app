import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import AvailableCash from '../../components/AvailableCash/AvailableCash';

function Savings() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: 'white' }}>
          <AvailableCash />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Savings;
