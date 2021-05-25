import React, { ReactElement } from 'react';
import { Image, View } from 'react-native';
import { DarkText, GreyText, StyledTextAccent } from '../styledComponents';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
const HEART_ICON = require('../../assets/images/heart.png');

function AccountsListItem({
  title,
  subtitle,
  banknotes,
  cents,
  icon,
  navigateTo,
  additionalInfo,
  achievement,
  style,
}: {
  title: string;
  subtitle: string;
  banknotes: string;
  cents: string;
  icon: boolean | undefined;
  navigateTo: string | undefined;
  additionalInfo: string | undefined;
  achievement: string;
}): ReactElement {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.itemWrapper, style]}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate(navigateTo, { subtitle: subtitle })}>
        <View>
          <DarkText style={styles.itemTitle}>
            {title}{' '}
            {icon ? <Image style={styles.icon} source={HEART_ICON} /> : null}
          </DarkText>
          <GreyText style={styles.itemSubTitle}>{subtitle}</GreyText>
        </View>
        <View style={styles.itemRight}>
          <DarkText style={styles.amountBig}>
            ${banknotes}
            <DarkText style={styles.amountSmall}>.{cents}</DarkText>
          </DarkText>
          <MaterialIcons
            name="chevron-right"
            color={theme.colors.primary}
            size={30}
          />
        </View>
      </TouchableOpacity>
      {achievement ? (
        <StyledTextAccent style={styles.achievement}>
          {achievement}
        </StyledTextAccent>
      ) : null}
    </View>
  );
}

export default AccountsListItem;
