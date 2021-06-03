import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { getDay, getDayTime, getMonth, getYear } from '../../../utils/getDate';
import { DarkText } from '../../styledComponents';
import { styles } from './styles';

function Greeting() {
  const fullName = useAppSelector(state => state.profileReducer?.fullName);

  const getFirstName = (name: string) => {
    return name.split(' ').slice(0, 1).join();
  };

  return (
    <DarkText style={styles.welcomeText}>{`${getDayTime()} ${getFirstName(
      fullName,
    )} | ${getMonth(
      new Date().getMonth(),
    )} ${getDay()}, ${getYear()}`}</DarkText>
  );
}

export default Greeting;
