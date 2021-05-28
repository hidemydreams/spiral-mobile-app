/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import AppNavigationContainer from '../../navigations';
import { ThemeProvider } from 'react-native-elements';
import theme from '../../theme/Theme';
import { Provider } from 'react-redux';
import { persistedStore, store } from '../../redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import MaskedView from '@react-native-masked-view/masked-view';
import { Animated, StyleSheet, View } from 'react-native';

const initialState = {
  loadingProgress: new Animated.Value(0),
  animationDone: false,
};

const App = () => {
  const [animation, setAnimation] = useState(initialState);

  const colorLayer = animation.animationDone ? null : (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: 'yellow' }]} />
  );

  const whiteLayer = animation.animationDone ? null : (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: 'white' }]} />
  );

  const imageScale = {
    transform: [
      {
        scale: animation.loadingProgress.interpolate({
          inputRange: [0, 15, 100],
          outputRange: [0.5, 0.06, 16],
        }),
      },
    ],
  };

  const imageOpacity = {
    opacity: animation.loadingProgress.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    }),
  };

  useEffect(() => {
    Animated.timing(animation.loadingProgress, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      delay: 400,
    }).start(() => {
      setAnimation({
        ...animation,
        animationDone: true,
      });
    });
  });

  return (
    <View style={{ flex: 1 }}>
      {colorLayer}
      <MaskedView
        style={{ flex: 1 }}
        maskElement={
          <View
            style={[
              {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Animated.Image
              source={require('../../assets/images/logo_splash_screen.png')}
              style={[{ width: 1000 }, imageScale]}
              resizeMode="contain"
            />
          </View>
        }>
        {whiteLayer}
        <Animated.View
          style={[
            {
              flex: 1,
            },
            imageOpacity,
          ]}>
          <Provider store={store}>
            <PersistGate persistor={persistedStore}>
              <ThemeProvider theme={theme}>
                <AppNavigationContainer />
              </ThemeProvider>
            </PersistGate>
          </Provider>
        </Animated.View>
      </MaskedView>
    </View>
  );
};

export default App;
