import React from 'react';
import { View, Text } from 'react-native';

function BackButton({ routeName }) {
  return (
    <View>
      <Text>{routeName ? routeName : 'Logo'}</Text>
    </View>
  );
}

export default BackButton;
