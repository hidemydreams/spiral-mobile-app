import React, { useState } from 'react';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
<<<<<<< HEAD:src/components/shared/HeaderRight.tsx
import styled from 'styled-components/native';
import { logout } from '../../redux/actions/loginActions';
import { useAppDispatch } from '../../redux/hooks';
const HeaderRight = styled.View`
  padding-right: 7px;
`;

=======
const USER_PROFILE_ICON = require('../../../assets/images/oval.png');
import styles from './styles';
>>>>>>> a9c3f746b729fe5ba617aef1ff3b0cab072444ab:src/components/shared/HeaderRight/HeaderRight.tsx
function HeaderLeft() {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const dispatch = useAppDispatch();

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
            <ListItem.Title onPress={() => dispatch(logout())}>
              Log out
            </ListItem.Title>
            <ListItem.Title>Profile</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </Modal>
    </View>
  );
}

export default HeaderLeft;
