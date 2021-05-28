import React, { useEffect, useState } from 'react';
import theme from '../../theme/Theme';
import MaskedView from '@react-native-masked-view/masked-view';
import { Animated, StyleSheet, View } from 'react-native';
import { styles } from './styles';
import SplashScreens from 'react-native-splash-screen';

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
    <View style={[StyleSheet.absoluteFill, styles.whiteBg]} />
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

  const setAnimationProperties = async () => {
    await Animated.timing(animation.loadingProgress, {
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
  };

  useEffect(() => {
    SplashScreens.hide();
    setAnimationProperties();
  });

  return (
    <View style={styles.fullWidth}>
      {colorLayer}
      <MaskedView
        style={styles.fullWidth}
        maskElement={
          <View style={[styles.centered]}>
            <Animated.Image
              source={require('../../assets/images/logo_splash_screen.png')}
              style={[styles.imageWidth, imageScale]}
              resizeMode="contain"
            />
          </View>
        }>
        {whiteLayer}
        <Animated.View style={[styles.fullWidth, imageOpacity]}>
          {children}
        </Animated.View>
      </MaskedView>
    </View>
  );
};

export default SplashScreen;
