import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

function BackButton({ location }) {
  const navigation = useNavigation();
  console.log(location);
  return (
    <View>
      {!location ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/images/back.png')} />
        </TouchableOpacity>
      ) : (
        <View>
          <Image source={require('../../assets/images/burgerMenuIcon.png')} />
        </View>
      )}
    </View>
  );
}

export default BackButton;
