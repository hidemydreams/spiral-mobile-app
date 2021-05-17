import React from 'react';
import { BlurView } from '@react-native-community/blur';
import { View } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
function TapBar(props) {
  return (
    <>
      <BlurView
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
        blurType="light"
        blurAmount={50}>
        <View
          style={{
            position: 'absolute',
            width: 400,
            height: 100,
            backgroundColor: 'white',
            bottom: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <BottomTabBar {...props} />
        <View
          style={{
            position: 'absolute',
            width: 200,
            height: 40,
            backgroundColor: 'pink',
            bottom: 10,
            left: 100,
            zIndex: -1,
          }}
        />
      </BlurView>
    </>
  );
}

export default TapBar;