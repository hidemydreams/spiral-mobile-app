/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useEffect } from 'react';
import AppNavigationContainer from '../../navigations';
import { ThemeProvider } from 'react-native-elements';
import theme from '../../theme/Theme';
import { Provider } from 'react-redux';
import { persistedStore, store } from '../../redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <ThemeProvider theme={theme}>
          <AppNavigationContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
