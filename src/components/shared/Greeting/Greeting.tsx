import React from 'react';
import { getDay, getDayTime, getMonth, getYear } from '../../../utils/getDate';
import { DarkText } from '../../styledComponents';
import { styles } from './styles';

function Greeting() {
  return (
    <DarkText style={styles.welcomeText}>{`${getDayTime()} User | ${getMonth(
      new Date().getMonth(),
    )} ${getDay()}, ${getYear()}`}</DarkText>
  );
}

export default Greeting;
