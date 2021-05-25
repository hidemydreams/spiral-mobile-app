import React from 'react';
import { TextInput, View } from 'react-native';
import { GreyText } from '../styledComponents';
import { Button } from 'react-native-elements';
import { styles } from './styles';

function SearchBar() {
  return (
    <View style={styles.filterRowContainer}>
      <TextInput style={styles.filterInput} placeholder="Search Transactions" />
      <Button
        title={<GreyText style={styles.buttonText}>Filter By</GreyText>}
        buttonStyle={styles.filterButton}
      />
    </View>
  );
}

export default SearchBar;
