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
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import theme from '../../theme/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>This is going to be a cool app!</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
