import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
const CHEVRON_BACK = require('../../assets/images/back.png');

const HeaderLeftView = styled.View`
  padding-left: 7px;
`;

function HeaderLeft({ location }: { location?: String }) {
  const navigation = useNavigation();
  return (
    <HeaderLeftView>
      {!location ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={CHEVRON_BACK} />
        </TouchableOpacity>
      ) : (
        <View>
          <Image source={require('../../assets/images/burgerMenuIcon.png')} />
        </View>
      )}
    </HeaderLeftView>
  );
}

export default HeaderLeft;
