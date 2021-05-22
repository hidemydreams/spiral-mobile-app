import React, { ReactElement } from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import { DarkText, LightText } from '../styledComponents';
import { styles } from './styles';
import Video from 'react-native-video';
const SHARE_ICON = require('../../assets/images/shareArrow.png');
const VIDEO = require('../../assets/videos/video.mp4');

function VideoCard({
  title,
  place,
  timestamp,
  description,
  currentVisibleIndex,
  currentIndex,
  index,
}: Props): ReactElement {
  console.log('current visible index', currentVisibleIndex);
  return (
    <View style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <Image
          style={styles.cardTitleImage}
          source={require('../../assets/images/avatar.png')}
        />
        <View>
          <DarkText style={styles.cardTitle}>
            {title} {index}
          </DarkText>
          <View style={styles.cardSubtitleContainer}>
            <DarkText style={styles.cardSubtitle}>{place} </DarkText>
            <View style={styles.dot} />
            <DarkText style={styles.cardSubtitle}> {timestamp}</DarkText>
          </View>
        </View>
      </View>
      <View style={styles.videoContainer}>
        {currentIndex !== currentVisibleIndex ? (
          <Image
            style={styles.cardBigImage}
            source={require('../../assets/images/rectangle2.png')}
          />
        ) : (
          <Video
            source={VIDEO}
            style={styles.backgroundVideo}
            muted={true}
            resizeMode="cover"
            paused={currentIndex !== currentVisibleIndex}
          />
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
