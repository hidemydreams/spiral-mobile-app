import React, { ReactElement, useState } from 'react';
import { Image, View } from 'react-native';
import Button from 'react-native-elements/dist/buttons/Button';
import { DarkText, LightText } from '../styledComponents';
import { styles } from './styles';
import Video from 'react-native-video';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/core';
import screens from '../../constants/screens';
const SHARE_ICON = require('../../assets/images/shareArrow.png');
const VIDEO = require('../../assets/videos/video.mp4');
const AVATAR_ICON = require('../../assets/images/avatar.png');
const BASE_IMAGE = require('../../assets/images/rectangle2.png');

function VideoCard({
  title,
  place,
  timestamp,
  description,
  currentVisibleIndex,
  currentIndex,
}: Props): ReactElement {
  const [isVolumeOn, setIsVolumeOn] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <Image style={styles.cardTitleImage} source={AVATAR_ICON} />
        <View>
          <DarkText style={styles.cardTitle}>{title}</DarkText>
          <View style={styles.cardSubtitleContainer}>
            <DarkText style={styles.cardSubtitle}>{place} </DarkText>
            <View style={styles.dot} />
            <DarkText style={styles.cardSubtitle}> {timestamp}</DarkText>
          </View>
        </View>
      </View>
      <View>
        {currentIndex !== currentVisibleIndex ? (
          <Image style={styles.cardBigImage} source={BASE_IMAGE} />
        ) : (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate(screens.VIDEO_PLAYER, {
                videoURL: VIDEO,
              })
            }>
            <View style={styles.videoContainer}>
              <Video
                source={VIDEO}
                style={styles.backgroundVideo}
                muted={isVolumeOn}
                resizeMode="cover"
                paused={currentIndex !== currentVisibleIndex}
              />
              <View style={styles.volumeIcon}>
                <TouchableOpacity onPress={() => setIsVolumeOn(!isVolumeOn)}>
                  {isVolumeOn ? (
                    <MaterialIcons name="volume-off" color="white" size={30} />
                  ) : (
                    <MaterialIcons name="volume-up" color="white" size={30} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
      <DarkText style={styles.description}>{description}</DarkText>
      <Button
        buttonStyle={styles.shareButton}
        title={
          <>
            <Image style={styles.shareImage} source={SHARE_ICON} />
            <LightText style={styles.shareButtonTitle}>
              Share to spread the word
            </LightText>
          </>
        }
      />
    </View>
  );
}

export default VideoCard;
