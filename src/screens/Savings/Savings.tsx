import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import AvailableCash from '../../components/AvailableCash/AvailableCash';
import { useTheme } from 'react-native-elements';
import { DarkText, StyledTextAccent } from '../../components/styledComponents';
import SearchBar from '../../components/SearchBar/SearchBar';
import SavingsItem from '../../components/SavingsItem/SavingsItem';
import { styles } from './styles';
const GRAPH_IMAGE = require('../../assets/images/savingsGraphV2.png');

function Savings() {
  const { theme } = useTheme();

  const availableFundsStyles = {
    subtitle: {
      fontSize: 16,
      marginTop: 5,
      color: theme.colors.grey,
    },
    title: {
      marginTop: 50,
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.graphBg}>
        <View>
          <AvailableCash style={availableFundsStyles} />
          <Image style={styles.graphImage} source={GRAPH_IMAGE} />
        </View>
      </View>
      <View style={theme.layout.container}>
        <View style={styles.pointsBlock}>
          <View style={styles.pointsRow}>
            <DarkText style={styles.pointsText}>Total interest gained</DarkText>
            <StyledTextAccent>+ $50.00</StyledTextAccent>
          </View>
          <View style={styles.pointsRow}>
            <DarkText style={styles.pointsText}>Total interest gained</DarkText>
            <StyledTextAccent>+ $50.00</StyledTextAccent>
          </View>
        </View>
        <SearchBar />
        <View style={styles.depositBlock}>
          <View style={styles.depositBlockTitle}>
            <DarkText style={styles.depositBlockText}>
              End Day Balance - July 11
            </DarkText>
            <DarkText style={styles.depositBlockText}>$5.000</DarkText>
          </View>
          <SavingsItem />
          <SavingsItem />
          <SavingsItem />
          <SavingsItem />
          <SavingsItem />
        </View>
      </View>
    </ScrollView>
  );
}

export default Savings;
