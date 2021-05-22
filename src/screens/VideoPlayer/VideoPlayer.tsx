import React from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';

function VideoPlayer({ route }) {
  const { videoURL } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Video source={videoURL} style={{ flex: 1 }} controls />
    </View>
  );
}

export default VideoPlayer;
