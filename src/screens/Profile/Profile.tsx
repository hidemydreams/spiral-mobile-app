import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { DarkText, LightText } from '../../components/styledComponents';

function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          style={styles.avatar}
          source={require('../../assets/images/avatar_image.webp')}
        />
        <DarkText style={styles.profileName}>Full Name</DarkText>
        <DarkText style={styles.profileDate}>05.15.1999</DarkText>
      </View>
      <Button title={<LightText>Edit profile</LightText>} />
      <View style={styles.buttonContainer}>
        <Button title={<LightText>Apply Changes</LightText>} />
        <Button title={<LightText>Cancel</LightText>} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    marginBottom: 60,
  },
  profileName: {
    marginBottom: 20,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  profileDate: {},
});

export default Profile;
