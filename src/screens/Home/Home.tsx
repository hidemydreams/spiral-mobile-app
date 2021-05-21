import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  VirtualizedList,
} from 'react-native';
import screens from '../../constants/screens';
import HeaderLeft from '../../components/shared/HeaderLeft';
import HeaderRight from '../../components/shared/HeaderRight';
import HeaderTitle from '../../components/shared/HeaderTitle';
import { useNavigation } from '@react-navigation/native';
import VideoCard from '../../components/VideoCard/VideoCard';
import { DarkText } from '../../components/styledComponents';
import AccountsOverview from '../../components/AccountsOverview';
import { useTheme } from 'react-native-elements';
import { GIVING_CARD_DATA } from '../../data/data';

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: data.title,
});

const getItemCount = data => 3;

function Home() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  return (
    <ScrollView>
      <View style={theme.layout.container}>
        <StatusBar barStyle="light-content" />
        <DarkText style={styles.welcomeText}>
          Hello User | Jul 12, 2020
        </DarkText>
        <AccountsOverview />
        <VirtualizedList
          data={GIVING_CARD_DATA}
          renderItem={({ item }) => (
            <VideoCard
            // title={item.title}
            // place={item.place}
            // timestamp={item.timestamp}
            // description={item.description}
            // avatar={item.avatar}
            // image={item.image}
            />
          )}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

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
