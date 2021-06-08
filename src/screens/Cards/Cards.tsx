import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { useTheme } from 'react-native-elements';

function Cards() {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={[theme.layout.container, styles.container]}>
      <View>
        <Text style={styles.text}>Coming soon...</Text>
      </View>
    </SafeAreaView>
  );
}

export default Cards;
