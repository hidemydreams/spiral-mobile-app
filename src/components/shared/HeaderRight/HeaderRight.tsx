import React, { useState } from 'react';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { signOut } from '../../../redux/actions/loginActions';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useNavigation } from '@react-navigation/core';
import screens from '../../../constants/screens';
import styles from './styles';
import { DarkText } from '../../styledComponents';
<<<<<<< HEAD
const USER_PROFILE_ICON = require('../../../assets/images/oval.png');
=======
const USER_PROFILE_ICON = require('../../../assets/images/blank_avatar.jpeg');
>>>>>>> 8b815b6842a8ebc3f15de65213723061796fb746

function HeaderLeft() {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { photo } = useAppSelector(state => state.profileReducer);

  const hideUserMenu = (): void => {
    setUserMenuVisible(false);
  };
  const showUserMenu = (): void => {
    setUserMenuVisible(true);
  };

  const navigateToScreen = (): void => {
    navigation.navigate(screens.PROFILE);
    hideUserMenu();
  };

  return (
    <View style={styles.headerRight}>
      {photo ? (
        <Avatar
          onPress={showUserMenu}
          source={{
            uri: `data:${photo?.mime};base64,${photo?.data}`,
          }}
          rounded
        />
      ) : (
        <Avatar onPress={showUserMenu} source={USER_PROFILE_ICON} rounded />
      )}
      <Modal visible={userMenuVisible} transparent>
        <TouchableWithoutFeedback onPress={hideUserMenu}>
          <View style={[styles.userMenuOverlay]} />
        </TouchableWithoutFeedback>
        <ListItem style={styles.userMenuContent}>
          <ListItem.Content>
            <ListItem.Title onPress={() => dispatch(signOut())}>
              <DarkText>Logout</DarkText>
            </ListItem.Title>
            <ListItem.Title onPress={navigateToScreen}>Profile</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </Modal>
    </View>
  );
}

export default HeaderLeft;
