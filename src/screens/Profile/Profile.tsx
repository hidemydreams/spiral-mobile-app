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

function Profile() {
  const dispatch = useAppDispatch();
  const fullName = useAppSelector(state => state.profileReducer?.fullName);
  const dateOfBirth = useAppSelector(
    state => state.profileReducer?.dateOfBirth,
  );
  const [isEditableMode, setIsEditableMode] = useState(false);
  const [profileName, setProfileName] = useState(fullName);
  const [profileDate, setProfileDate] = useState(dateOfBirth);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    const parsedProfileDate = parseProfileDate(currentDate);
    setDate(currentDate);
    setProfileDate(parsedProfileDate);
  };

  // march 21, 1996
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
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={{ width: 200, marginHorizontal: 'auto' }}
          />
        ) : (
          <DarkText style={styles.profileDate}>{profileDate}</DarkText>
        )}
      </View>
      <View style={styles.buttonContainer}>
        {isEditableMode ? (
          <>
            <Button
              onPress={() => {
                setIsEditableMode(false);
                dispatch(applyChanges(profileName, profileDate));
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
