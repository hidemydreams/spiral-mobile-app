import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import AvailableCash from '../../components/AvailableCash/AvailableCash';
import { useTheme } from 'react-native-elements';

function Savings() {
  const { theme } = useTheme();

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={theme.layout.container}>
            <AvailableCash />
            <Image source={require('../../assets/images/savingsGraphV2.png')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Savings;
