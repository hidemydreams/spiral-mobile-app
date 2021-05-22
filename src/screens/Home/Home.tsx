import React, { useRef, useState } from 'react';
import { StatusBar, View, FlatList } from 'react-native';
import VideoCard from '../../components/VideoCard/VideoCard';
import AccountsOverview from '../../components/AccountsOverview/AccountsOverview';
import { useTheme } from 'react-native-elements';
import { GIVING_CARD_DATA } from '../../data/data';
import Greeting from '../../components/shared/Greeting/Greeting';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderLeft from '../../components/shared/HeaderLeft';
import HeaderRight from '../../components/shared/HeaderRight';
import HeaderTitle from '../../components/shared/HeaderTitle';
import screens from '../../constants/screens';

function Home() {
  const { theme } = useTheme();
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(null);

  const renderVideoCards = ({ item, index }) => (
    <VideoCard
      title={item.title}
      place={item.place}
      timestamp={item.timestamp}
      description={item.description}
      currentIndex={index}
      currentVisibleIndex={currentVisibleIndex}
    />
  );

  const handleItemsInViewPort = ({
    viewableItems,
  }: {
    viewableItems: Array;
  }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentVisibleIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        minimumViewTime: 500,
        itemVisiblePercentThreshold: 100,
      },
      onViewableItemsChanged: handleItemsInViewPort,
    },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={theme.layout.container}
        data={GIVING_CARD_DATA}
        ListHeaderComponent={
          <>
            <StatusBar barStyle="light-content" />
            <Greeting />
            <AccountsOverview />
          </>
        }
        renderItem={renderVideoCards}
        keyExtractor={item => item.id}
        viewabilityConfig={{
          minimumViewTime: 100,
          viewAreaCoveragePercentThreshold: 100,
        }}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </View>
  );
}

function HomeStack({ route }) {
  const Stack = createStackNavigator();
  const { theme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.HOME}
        component={Home}
        options={{
          headerLeft: () => <HeaderLeft location={screens.HOME} />,
          headerTitle: () => <HeaderTitle routeName={route.name} />,
          headerRight: () => <HeaderRight />,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
