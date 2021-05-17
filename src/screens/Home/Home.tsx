import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Home({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Saving')}>
            <Text>Go to savings screen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Checking')}>
            <Text>Go to checking screen</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 500,
            height: 100,
            backgroundColor: 'pink',
            marginBottom: 20,
          }}
        />
        <View
          style={{
            width: 500,
            height: 100,
            backgroundColor: 'pink',
            marginBottom: 20,
          }}
        />
        <View
          style={{
            width: 500,
            height: 100,
            backgroundColor: 'pink',
            marginBottom: 20,
          }}
        />
        <View
          style={{
            width: 500,
            height: 100,
            backgroundColor: 'pink',
            marginBottom: 20,
          }}
        />
        <View
          style={{
            width: 500,
            height: 100,
            backgroundColor: 'pink',
            marginBottom: 20,
          }}
        />
        <View
          style={{
            width: 500,
            height: 100,
            backgroundColor: 'pink',
            marginBottom: 20,
          }}
        />
        <View
          style={{
            width: 500,
            height: 100,
            backgroundColor: 'pink',
            marginBottom: 20,
          }}
        />
        <View
          style={{
            width: 500,
            height: 100,
            backgroundColor: 'pink',
            marginBottom: 20,
          }}
        />
        <View
          style={{
            width: 500,
            height: 100,
            backgroundColor: 'pink',
            marginBottom: 20,
          }}
        />
        <Image source={require('../../assets/images/TOM.png')} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
