import React, { ReactElement } from 'react';
import { StatusBar, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VideoCard from '../../components/VideoCard';
import { DarkText } from '../../components/styledComponents';
import AccountsOverview from '../../components/AccountsOverview';
import { useTheme } from 'react-native-elements';

function Home() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  return (
    <ScrollView>
      <View style={theme.layout.container}>
        <StatusBar barStyle="light-content" />
        <DarkText>Hello User | Jul 12, 2020</DarkText>
        <AccountsOverview />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </View>
    </ScrollView>
  );
}

export default Home;
