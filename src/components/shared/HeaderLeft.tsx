import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
const CHEVRON_BACK_ICON = require('../../assets/images/back.png');
const BURGER_MENU_ICON = require('../../assets/images/burgerMenuIcon.png');

const HeaderLeftView = styled.View`
  padding-left: 7px;
`;

function HeaderLeft({ location }: { location?: String }) {
  const navigation = useNavigation();
  return (
    <HeaderLeftView>
      {!location ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={CHEVRON_BACK_ICON} />
        </TouchableOpacity>
      ) : (
        <View>
          <Image source={BURGER_MENU_ICON} />
        </View>
      )}
    </HeaderLeftView>
  );
}

export default HeaderLeft;
