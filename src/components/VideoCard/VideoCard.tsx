import React, { ReactElement, useState, FC } from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import { DarkText, LightText, GreyText } from '../styledComponents';
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

interface VideoCardProps {
  title: string;
  place: string;
  timestamp: string;
  description: string;
  currentVisibleIndex: number | null | undefined;
  currentIndex: number;
}

interface IVolumevisibilityState {
  position: string;
  left: number;
  top: number;
  zIndex: number;
  backgroundColor: string;
  borderRadius: number;
  width: number;
  padding: number;
  display: string;
}

const VideoCard: FC<VideoCardProps> = ({
  title,
  place,
  timestamp,
  description,
  currentVisibleIndex,
  currentIndex,
}): ReactElement => {
  const [isVolumeOn, setIsVolumeOn] = useState(true);
  const [volumeIconVisibility, setVolumeIconVisibility] =
    useState<IVolumevisibilityState>(styles.volumeIconOff);
  const navigation = useNavigation();
  const setVolume = () => {
    setIsVolumeOn(!isVolumeOn);
  };

  const volumeIconSettings = {
    color: 'white',
    size: 30,
  };
  return (
    <View style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <Image style={styles.cardTitleImage} source={AVATAR_ICON} />
        <View>
          <DarkText style={styles.cardTitle}>{title}</DarkText>
          <View style={styles.cardSubtitleContainer}>
            <GreyText style={styles.cardSubtitle}>{place} </GreyText>
            <View style={styles.dot} />
            <GreyText style={styles.cardSubtitle}> {timestamp}</GreyText>
          </View>
        </View>
      </View>
      <View style={styles.mediaContainer}>
        {currentIndex === currentVisibleIndex && (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate(screens.VIDEO_PLAYER, {
                videoURL: VIDEO,
              })
            }>
            <View style={styles.videoContainer}>
              <Video
                repeat
                source={VIDEO}
                style={styles.backgroundVideo}
                muted={isVolumeOn}
                resizeMode="cover"
                paused={currentIndex !== currentVisibleIndex}
                onReadyForDisplay={() => {
                  setVolumeIconVisibility(styles.volumeIcon);
                }}
              />
              <View style={volumeIconVisibility}>
                <TouchableOpacity onPress={setVolume}>
                  {isVolumeOn ? (
                    <MaterialIcons name="volume-off" {...volumeIconSettings} />
                  ) : (
                    <MaterialIcons name="volume-up" {...volumeIconSettings} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        <Image style={styles.cardBigImage} source={BASE_IMAGE} />
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
};

export default VideoCard;
