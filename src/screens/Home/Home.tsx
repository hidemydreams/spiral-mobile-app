import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import screens from '../../constants/screens';
import HeaderLeft from '../../components/shared/HeaderLeft';
import HeaderRight from '../../components/shared/HeaderRight';
import HeaderTitle from '../../components/shared/HeaderTitle';
import { useNavigation } from '@react-navigation/native';
import VideoCard from '../../components/VideoCard/VideoCard';
import AccountsOverview from '../../components/AccountsOverview';
import { useTheme } from 'react-native-elements';
import { GIVING_CARD_DATA } from '../../data/data';
import Greeting from '../../components/shared/Greeting/Greeting';

function Home() {
  const { theme } = useTheme();
  return (
    <ScrollView>
      <View style={theme.layout.container}>
        <StatusBar barStyle="light-content" />
        <Greeting />
        <FlatList
          data={GIVING_CARD_DATA}
          renderItem={({ item }) => (
            <VideoCard
              title={item.title}
              place={item.place}
              timestamp={item.timestamp}
              description={item.description}
              avatar={item.avatar}
            />
          )}
          keyExtractor={item => item.id}
          ListHeaderComponent={AccountsOverview}
          ListFooterComponent={null}
        />
      </View>
    </ScrollView>
  );
}

function HomeStackNavigator(): ReactElement {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={screens.HOME}>
      <HomeStack.Screen
        name={screens.HOME}
        component={Home}
        options={{
          headerLeft: () => <HeaderLeft location={screens.HOME} />,
          headerTitle: () => <HeaderTitle />,
          headerRight: () => <HeaderRight />,
          headerStyle: {
            backgroundColor: 'rgb(215, 51, 116)',
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
