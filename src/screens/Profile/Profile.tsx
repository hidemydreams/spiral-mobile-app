import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { DarkText, LightText } from '../../components/styledComponents';
import { styles } from './styles';

function Profile() {
  const [isEditableMode, setIsEditableMode] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          style={styles.avatar}
          source={require('../../assets/images/avatar_image.webp')}
        />
        {isEditableMode ? (
          <View style={styles.buttonContainer}>
            <Button
              buttonStyle={styles.button}
              title={<LightText style={styles.buttonText}>Camera</LightText>}
            />
            <Button
              buttonStyle={styles.button}
              title={
                <LightText style={styles.buttonText}>From Device</LightText>
              }
            />
          </View>
        ) : null}

        <DarkText style={styles.profileName}>Full Name</DarkText>
        <DarkText style={styles.profileDate}>05.15.1999</DarkText>
      </View>

      <View style={styles.buttonContainer}>
        {isEditableMode ? (
          <>
            <Button
              onPress={() => setIsEditableMode(false)}
              buttonStyle={styles.button}
              title={
                <LightText style={styles.buttonText}>Apply Changes</LightText>
              }
            />
            <Button
              onPress={() => setIsEditableMode(false)}
              buttonStyle={styles.button}
              title={<LightText style={styles.buttonText}>Cancel</LightText>}
            />
          </>
        ) : (
          <Button
            onPress={() => setIsEditableMode(true)}
            buttonStyle={styles.button}
            title={
              <LightText style={styles.buttonText}>Edit profile</LightText>
            }
          />
        )}
      </View>
    </View>
  );
}

export default Profile;
