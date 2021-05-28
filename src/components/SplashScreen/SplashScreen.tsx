import React, { useEffect, useState } from 'react';
import theme from '../../theme/Theme';
import MaskedView from '@react-native-masked-view/masked-view';
import { Animated, StyleSheet, View } from 'react-native';

const initialState = {
  loadingProgress: new Animated.Value(0),
  animationDone: false,
};

const SplashScreen = ({ children }) => {
  const [animation, setAnimation] = useState(initialState);

  const colorLayer = animation.animationDone ? null : (
    <View
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: theme.colors.primary },
      ]}
    />
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
          {children}
        </Animated.View>
      </MaskedView>
    </View>
  );
};

export default SplashScreen;
