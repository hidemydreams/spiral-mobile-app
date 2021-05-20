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
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';

const store = configureStore();
const persistedStore = persistStore(store);

const App = () => {
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

export type AppDispatch = typeof store.dispatch;
