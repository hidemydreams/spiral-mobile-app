import React, { ReactElement } from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';
import { styles } from './styles';
import { RouteProp } from '@react-navigation/core';

type RootStackParamList = {
  'Video Player': { videoURL: string };
};

type VideoPlayerRouteProp = RouteProp<RootStackParamList, 'Video Player'>;

type Props = {
  route: VideoPlayerRouteProp;
};

function VideoPlayer({ route }: Props): ReactElement {
  const { videoURL } = route.params;
  return (
    <View style={styles.videoContainer}>
      <Video source={parseInt(videoURL)} style={styles.video} controls />
    </View>
  );
}

export default VideoPlayer;
