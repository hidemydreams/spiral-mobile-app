import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';

const RouteText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  font-family: Sf Pro Rounded;
  color: white;
`;

const SubtitleText = styled.Text`
  font-size: 10px;
  font-weight: 500;
  font-family: Sf Pro Rounded;
  color: white;
`;

const HeaderTitleView = styled.View`
  text-align: center;
  align-items: center;
`;

function HeaderTitle({
  routeName,
  subtitle,
}: {
  routeName?: string;
  subtitle?: string;
}) {
  return (
    <HeaderTitleView>
      {routeName ? (
        <RouteText>{routeName}</RouteText>
      ) : (
        <View>
          <Image source={require('../../assets/images/logo.png')} />
        </View>
      )}
      {subtitle ? <SubtitleText>{subtitle}</SubtitleText> : null}
    </HeaderTitleView>
  );
}

export default HeaderTitle;
