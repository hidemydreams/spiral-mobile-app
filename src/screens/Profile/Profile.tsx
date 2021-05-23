import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { DarkText, LightText } from '../../components/styledComponents';
import { styles } from './styles';
import { useAppSelector } from '../../redux/hooks';
import { useAppDispatch } from '../../redux/hooks';
import { applyChanges } from '../../redux/actions/profileActions';

const profileData = {
  fullName: '',
  dateOfBirth: '',
  photo: '',
};

function Profile() {
  const [isEditableMode, setIsEditableMode] = useState(false);
  const [newProfileData, setNewProfileData] = useState(profileData);
  const dispatch = useAppDispatch();
  const { fullName, dateOfBirth, photo } = useAppSelector(
    state => state.profileReducer,
  );
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

        {isEditableMode ? (
          <View style={styles.input}>
            <DarkText style={styles.inputLabel}>Full Name</DarkText>
            <Input
              containerStyle={styles.inputContainer}
              placeholder="Full Name"
            />
          </View>
        ) : (
          <DarkText style={styles.profileName}>{fullName}</DarkText>
        )}
        <DarkText style={styles.profileDate}>{dateOfBirth}</DarkText>
      </View>
      <View style={styles.buttonContainer}>
        {isEditableMode ? (
          <>
            <Button
              onPress={() => {
                setIsEditableMode(false);
                dispatch(applyChanges(newProfileData));
              }}
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
