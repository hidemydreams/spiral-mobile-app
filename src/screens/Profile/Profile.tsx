import React, { useState } from 'react';
import { View, Image, Platform } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { DarkText, LightText } from '../../components/styledComponents';
import { styles } from './styles';
import { useAppSelector } from '../../redux/hooks';
import { useAppDispatch } from '../../redux/hooks';
import { applyChanges } from '../../redux/actions/profileActions';
import DateTimePicker from '@react-native-community/datetimepicker';
import { parseProfileDate } from '../../utils/getDate';
import ImagePicker from 'react-native-image-crop-picker';
const USER_PROFILE_ICON = require('../../assets/images/blank_avatar.jpeg');

function Profile() {
  const dispatch = useAppDispatch();
  const { fullName, dateOfBirth, photo } = useAppSelector(
    state => state.profileReducer,
  );
  const [isEditableMode, setIsEditableMode] = useState(false);
  const [profileName, setProfileName] = useState(fullName);
  const [profileDate, setProfileDate] = useState(dateOfBirth);
  const [profileImage, setProfileImage] = useState(photo);
  const [date, setDate] = useState<object>(new Date());
  const [show, setShow] = useState(true);

  const onChange = (selectedDate: object): void => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    const parsedProfileDate = parseProfileDate(currentDate);
    setDate(currentDate);
    setProfileDate(parsedProfileDate);
  };

  const openCameraPicker = (): void => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      multiple: false,
      includeBase64: true,
    })
      .then(image => {
        setProfileImage(image);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const openGalleryPicker = (): void => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      multiple: false,
      includeBase64: true,
    })
      .then(image => {
        setProfileImage(image);
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  const applyProfileChanges = (): void => {
    setIsEditableMode(false);
    dispatch(applyChanges(profileName, profileDate, profileImage));
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        {photo ? (
          <Image
            style={styles.avatar}
            source={{
              uri: `data:${profileImage?.mime};base64,${profileImage?.data}`,
            }}
          />
        ) : (
          <Image style={styles.avatar} source={USER_PROFILE_ICON} />
        )}
        {isEditableMode ? (
          <View style={styles.buttonContainer}>
            <Button
              onPress={openCameraPicker}
              buttonStyle={styles.button}
              title={<LightText style={styles.buttonText}>Camera</LightText>}
            />
            <Button
              onPress={openGalleryPicker}
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
              onChangeText={(text: string) => setProfileName(text)}
              containerStyle={styles.inputContainer}
              placeholder="Full Name"
            />
          </View>
        ) : (
          <DarkText style={styles.profileName}>{profileName}</DarkText>
        )}
        {isEditableMode ? (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={styles.dateTimePicker}
          />
        ) : (
          <DarkText style={styles.profileDate}>{profileDate}</DarkText>
        )}
      </View>
      <View style={styles.buttonContainer}>
        {isEditableMode ? (
          <>
            <Button
              onPress={applyProfileChanges}
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
