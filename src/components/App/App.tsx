/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import theme from '../../theme/Theme';
import { StyleProvider } from 'native-base';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>This is going to be cool app!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
