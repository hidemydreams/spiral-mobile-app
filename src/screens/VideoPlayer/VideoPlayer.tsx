import React, { ReactElement } from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';
import { styles } from './styles';

function VideoPlayer({ route }): ReactElement {
  const { videoURL } = route.params;
  return (
    <View style={styles.videoContainer}>
      <Video source={videoURL} style={styles.video} controls />
    </View>
  );
}

export default VideoPlayer;
