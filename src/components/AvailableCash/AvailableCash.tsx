import React, { ReactElement, FC } from 'react';
import { View } from 'react-native';
import { DarkText } from '../styledComponents';
import { styles } from './styles';

type AvailableCashProps = typeof styles;

const AvailableCash: FC<AvailableCashProps> = ({ style }): ReactElement => {
  return (
    <View style={[styles.cardContainer, style?.title]}>
      <DarkText style={styles.cardAmount}>
        $7,000<DarkText>.80</DarkText>
      </DarkText>
      <DarkText style={[styles.cardTotal, style?.subtitle]}>
        Total Available Cash
      </DarkText>
    </View>
  );
};

export default AvailableCash;
