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
import { Provider } from 'react-redux';
import configureStore from '../../redux/store';
const store = configureStore();
export type AppDispatch = typeof store.dispatch;

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppNavigationContainer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
