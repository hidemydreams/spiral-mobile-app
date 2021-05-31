import React, { ReactElement } from 'react';
import { Image, View } from 'react-native';
import { DarkText, GreyText } from '../styledComponents';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

function AccountsListItem({
  title,
  subtitle,
  banknotes,
  cents,
  icon,
  navigateTo,
  additionalInfo,
}): ReactElement {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.itemWrapper}>
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate(navigateTo, { subtitle: additionalInfo })
        }>
        <View>
          <DarkText style={styles.itemTitle}>
            {title} <Image source={icon} />
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
    </View>
  );
}

export default AccountsListItem;