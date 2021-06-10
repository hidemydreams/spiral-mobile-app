import React, { FC } from 'react';
import { View, Image, Text } from 'react-native';
const LOGO_ICON = require('../../../assets/images/logo.png');
import { styles } from './styles';

interface IHeaderTitleProps {
  routeName?: string;
  subtitle?: string;
}

const HeaderTitle: FC<IHeaderTitleProps> = ({ routeName, subtitle }) => {
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
};

export default HeaderTitle;
