import React, { ReactElement } from 'react';
import { Image, View } from 'react-native';
import { DarkText, GreyText, StyledTextAccent } from '../styledComponents';
import { useTheme } from 'react-native-elements';
import { styles } from './styles';
const CONFETTI_ICON = require('../../assets/images/confetti2.png');

function CheckingItem({
  title,
  subtitle,
  banknotes,
  cents,
  isDeposit,
}: {
  title: string;
  subtitle: string;
  banknotes: string;
  cents: string;
  isDeposit: boolean;
}): ReactElement {
  const { theme } = useTheme();
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemTitleWrapper}>
        {isDeposit ? (
          <Image style={styles.icon} source={CONFETTI_ICON} />
        ) : null}
        <View>
          <DarkText
            style={[
              styles.itemTitle,
              isDeposit ? { color: theme.colors.accentGreen } : null,
            ]}>
            {title}
          </DarkText>
          <GreyText
            style={[
              styles.itemSubTitle,
              isDeposit ? { color: theme.colors.accentGreen } : null,
            ]}>
            {subtitle}
          </GreyText>
        </View>
      </View>
      <View style={styles.itemRight}>
        <DarkText
          style={[
            styles.amountBig,
            isDeposit ? { color: theme.colors.accentGreen } : null,
          ]}>
          ${banknotes}
          <DarkText
            style={[
              styles.amountSmall,
              isDeposit ? { color: theme.colors.accentGreen } : null,
            ]}>
            .{cents}
          </DarkText>
        </DarkText>
      </View>
    </View>
  );
}

export default CheckingItem;
