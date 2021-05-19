import React, { useState } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
} from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import styled from 'styled-components/native';
import { logout } from '../../redux/actions/loginActions';
import { useAppDispatch } from '../../redux/hooks';
const HeaderRight = styled.View`
  padding-right: 7px;
`;

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
    <HeaderRight>
      <Avatar
        onPress={showUserMenu}
        source={require('../../assets/images/oval.png')}
      />
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
    </HeaderRight>
  );
}

const styles = StyleSheet.create({
  userMenuContent: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 55,
    right: 10,
    width: 100,
  },
  userMenuOverlay: StyleSheet.absoluteFillObject,
});

export default HeaderLeft;
