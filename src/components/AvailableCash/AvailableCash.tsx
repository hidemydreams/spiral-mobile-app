import React, { ReactElement, FC } from 'react';
import { View } from 'react-native';
import { DarkText } from '../styledComponents';
import { styles } from './styles';

type AvailableCashProps = {
  titleStyle?: { marginTop: number };
  subtitleStyle?: {
    fontSize: number;
    marginTop: number;
    color: string;
  };
};

const AvailableCash: FC<AvailableCashProps> = ({
  titleStyle,
  subtitleStyle,
}): ReactElement => {
  return (
    <View style={[styles.cardContainer, titleStyle]}>
      <DarkText style={styles.cardAmount}>
        $7,000<DarkText>.80</DarkText>
      </DarkText>
      <DarkText style={[styles.cardTotal, subtitleStyle]}>
        Total Available Cash
      </DarkText>
    </View>
  );
};

export default AvailableCash;
