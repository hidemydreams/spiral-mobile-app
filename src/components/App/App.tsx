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
import AppNavigationContainer from '../../navigations';
import { ThemeProvider } from 'react-native-elements';
import theme from '../../theme/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigationContainer />
    </ThemeProvider>
  );
};

export default App;
