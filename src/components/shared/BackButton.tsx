import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const HeaderView = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

function BackButton({ navigation, route }) {
  console.log({ navigation });
  return (
    <HeaderView>
      {navigation ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Image source={require('../../assets/images/back.png')} /> */}
          <Text>Back</Text>
        </TouchableOpacity>
      ) : (
        <View>
          {/* <Image source={require('../../assets/images/burgerMenuIcon.png')} /> */}
          <Text>Burger</Text>
        </View>
      )}
    </HeaderView>
  );
}

export default BackButton;
