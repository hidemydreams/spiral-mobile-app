import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

const SubtitleText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  font-family: Sf Pro Rounded;
  color: white;
`;

function HeaderTitle({ routeName }: { routeName?: string }) {
  return (
    <View>
      <Text>
        {routeName ? (
          <SubtitleText>{routeName}</SubtitleText>
        ) : (
          <View>
            <Image source={require('../../assets/images/logo.png')} />
          </View>
        )}
      </Text>
    </View>
  );
}

export default HeaderTitle;
