import React from 'react';
import { View } from 'react-native';
import AvailableCash from '../../components/AvailableCash/AvailableCash';
import { useTheme } from 'react-native-elements';
import { DarkText } from '../../components/styledComponents';
import { ScrollView } from 'react-native-gesture-handler';
import CheckingItem from '../../components/CheckingItem/CheckingItem';
import { styles } from './styles';
import SearchBar from '../../components/SearchBar/SearchBar';
import { CheckingData, ICheckingDataItem } from '../../data/data';

function Checking() {
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

  const renderCheckingItems = (items: string) => {
    return CheckingData[items].map((item: ICheckingDataItem) => {
      return (
        <CheckingItem
          title={item.title}
          subtitle={item.subtitle}
          banknotes={item.funds.banknotes}
          cents={item.funds.cents}
          isSpecial={item.isSpecial}
          key={item.id}
        />
      );
    });
  };

  return (
    <>
      <ScrollView style={theme.layout.container}>
        <View>
          <AvailableCash
            titleStyle={availableFundsStyles.title}
            subtitleStyle={availableFundsStyles.subtitle}
          />
          <SearchBar />
          <View style={styles.transactionBlock}>
            <DarkText style={styles.transactionDate}>July 11</DarkText>
            <View style={styles.transactions}>
              {renderCheckingItems('july11')}
            </View>
          </View>
          <View style={styles.transactionBlock}>
            <DarkText style={styles.transactionDate}>July 12</DarkText>
            <View style={styles.transactions}>
              {renderCheckingItems('july12')}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Checking;
