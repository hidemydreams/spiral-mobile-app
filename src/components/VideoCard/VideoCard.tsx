import React, { ReactElement } from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-elements';
import { DarkText, LightText } from '../styledComponents';
import { styles } from './styles';
const SHARE_ICON = require('../../assets/images/shareArrow.png');

function VideoCard({
  title,
  place,
  timestamp,
  description,
}: Props): ReactElement {
  return (
    <View style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <Image
          style={styles.cardTitleImage}
          source={require('../../assets/images/avatar.png')}
        />
        <View>
          <DarkText style={styles.cardTitle}>{title}</DarkText>
          <View style={styles.cardSubtitleContainer}>
            <DarkText style={styles.cardSubtitle}>{place} </DarkText>
            <View style={styles.dot} />
            <DarkText style={styles.cardSubtitle}> {timestamp}</DarkText>
          </View>
        </View>
      </View>
      <Image
        style={styles.cardBigImage}
        source={require('../../assets/images/rectangle2.png')}
      />
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
