import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { DarkText } from '../styledComponents';
import { styles } from './styles';

function AvailableCash(): ReactElement {
  return (
    <View style={styles.cardContainer}>
      <DarkText style={styles.cardAmount}>
        $7,000<DarkText>.80</DarkText>
      </DarkText>
      <DarkText style={styles.cardTotal}>Total Available Cash</DarkText>
    </View>
  );
}

export default AvailableCash;
