import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-elements';
function Home({ navigation }: { navigation: any }) {
  const { theme } = useTheme();
  return (
    <SafeAreaView>
      <ScrollView style={theme.layout.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Saving')}>
            <Text style={{ fontFamily: theme.typography.fontFamily }}>
              Go to savings screen
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Checking')}>
            <Text>Go to checking screen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
