import React, { ReactElement } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { DarkText, LightText } from './styledComponents';

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
          source={require('../assets/images/avatar.png')}
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
        source={require('../assets/images/rectangle2.png')}
      />
      <DarkText style={styles.description}>{description}</DarkText>
      <Button
        buttonStyle={styles.shareButton}
        title={
          <>
            <Image
              style={styles.shareImage}
              source={require('../assets/images/shareArrow.png')}
            />
            <LightText style={styles.shareButtonTitle}>
              Share to spread the word
            </LightText>
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 20,
    overflow: 'hidden',
    borderColor: 'rgba(183, 188, 193, 0.5)',
    borderWidth: 1,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cardTitleImage: {
    marginRight: 5,
  },
  cardTitle: {
    fontSize: 18,
  },
  cardSubtitle: {
    fontSize: 16,
  },
  cardSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: 'rgb(215, 51, 116)',
    width: 5,
    height: 5,
    borderRadius: 50,
    marginHorizontal: 2,
  },
  cardBigImage: {
    maxWidth: 500,
  },
  description: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  shareImage: {
    marginRight: 5,
  },
  shareButton: {
    maxWidth: 300,
    borderRadius: 20,
    marginBottom: 20,
    alignSelf: 'center',
    fontSize: 14,
    paddingHorizontal: 40,
  },
  shareButtonTitle: {
    fontSize: 16,
  },
});

export default VideoCard;
