import React, { useState } from 'react';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { signOut } from '../../../redux/actions/loginActions';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useNavigation } from '@react-navigation/core';
import screens from '../../../constants/screens';

const USER_PROFILE_ICON = require('../../../assets/images/oval.png');
import styles from './styles';
function HeaderLeft() {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const photo = useAppSelector(state => state.profileReducer?.photo);

  const hideUserMenu = () => {
    setUserMenuVisible(false);
  };
  const showUserMenu = () => {
    setUserMenuVisible(true);
  };
  return (
    <View style={styles.headerRight}>
      <Avatar
        onPress={showUserMenu}
        source={{
          uri: `data:${photo?.mime};base64,${photo?.data}`,
        }}
        rounded
      />
      <Modal visible={userMenuVisible} transparent>
        <TouchableWithoutFeedback onPress={hideUserMenu}>
          <View style={styles.userMenuOverlay} />
        </TouchableWithoutFeedback>
        <ListItem style={styles.userMenuContent}>
          <ListItem.Content>
            <ListItem.Title onPress={() => dispatch(signOut())}>
              Log out
            </ListItem.Title>
            <ListItem.Title
              onPress={() => {
                navigation.navigate(screens.PROFILE);
                hideUserMenu();
              }}>
              Profile
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </Modal>
    </View>
  );
}

export default HeaderLeft;
