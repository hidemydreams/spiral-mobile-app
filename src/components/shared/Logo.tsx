import React from 'react';
import { View, Text, Image } from 'react-native';

function BackButton({ routeName }) {
  return (
    <View>
      <Text>
        {routeName ? (
          routeName
        ) : (
          <View>
            <Image source={require('../../assets/images/logo.png')} />
          </View>
        )}
      </Text>
    </View>
  );
}

export default BackButton;
