import React from 'react';
import { View } from 'react-native';
import { GreyText, StyledTextAccent } from '../styledComponents';
import { styles } from './styles';

function SavingsItem() {
  return (
    <>
      <View style={styles.savingsItem}>
        <View>
          <StyledTextAccent>Deposit</StyledTextAccent>
          <GreyText style={styles.subtitle}>July 11</GreyText>
        </View>
        <StyledTextAccent>
          $2,000<StyledTextAccent style={styles.cents}>.00</StyledTextAccent>
        </StyledTextAccent>
      </View>
      <View style={styles.separator} />
    </>
  );
}

export default SavingsItem;
