import React from 'react';
import { View, Image, Text } from 'react-native';
const LOGO_ICON = require('../../../assets/images/logo.png');
import { styles } from './styles';

function HeaderTitle({
  routeName,
  subtitle,
}: {
  routeName?: string;
  subtitle?: string;
}) {
  return (
    <View style={styles.headerTitle}>
      {routeName ? (
        <Text style={styles.routeText}>{routeName}</Text>
      ) : (
        <View>
          <Image source={LOGO_ICON} />
        </View>
      )}
      {subtitle ? (
        <Text style={[styles.routeText, styles.subtitleText]}>{subtitle}</Text>
      ) : null}
    </View>
  );
}

export default HeaderTitle;
