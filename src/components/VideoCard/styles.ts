import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
