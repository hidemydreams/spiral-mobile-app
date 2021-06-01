import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const CHEVRON_BACK_ICON = require('../../../assets/images/back.png');
const BURGER_MENU_ICON = require('../../../assets/images/burgerMenuIcon.png');
import { styles } from './styles';

function HeaderLeft({ location }: { location?: String }) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerLeft}>
      {!location ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={CHEVRON_BACK_ICON} />
        </TouchableOpacity>
      ) : (
        <View>
          <Image source={BURGER_MENU_ICON} />
        </View>
      )}
    </View>
  );
}

export default HeaderLeft;
