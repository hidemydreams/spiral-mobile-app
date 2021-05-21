import React, { useState } from 'react';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
const USER_PROFILE_ICON = require('../../../assets/images/oval.png');
import styles from './styles';
function HeaderLeft() {
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const hideUserMenu = () => {
    setUserMenuVisible(false);
  };
  const showUserMenu = () => {
    setUserMenuVisible(true);
  };
  return (
    <View style={styles.headerRight}>
      <Avatar onPress={showUserMenu} source={USER_PROFILE_ICON} />
      <Modal visible={userMenuVisible} transparent>
        <TouchableWithoutFeedback onPress={hideUserMenu}>
          <View style={styles.userMenuOverlay} />
        </TouchableWithoutFeedback>
        <ListItem style={styles.userMenuContent}>
          <ListItem.Content>
            <ListItem.Title>Log out</ListItem.Title>
            <ListItem.Title>Profile</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </Modal>
    </View>
  );
}

export default HeaderLeft;
