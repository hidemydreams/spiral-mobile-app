import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
const HeaderRight = styled.View`
  padding-right: 7px;
`;

function HeaderLeft() {
  return (
    <HeaderRight>
      <Image source={require('../../assets/images/oval.png')} />
    </HeaderRight>
  );
}

export default HeaderLeft;
