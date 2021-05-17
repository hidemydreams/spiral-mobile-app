import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const HeaderView = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

function BackButton({ navigation }) {
  return (
    <HeaderView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </HeaderView>
  );
}

export default BackButton;
