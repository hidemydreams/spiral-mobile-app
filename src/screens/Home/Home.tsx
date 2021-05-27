import React, { useRef, useState } from 'react';
import { StatusBar, View, FlatList } from 'react-native';
import VideoCard from '../../components/VideoCard/VideoCard';
import AccountsOverview from '../../components/AccountsOverview/AccountsOverview';
import { useTheme } from 'react-native-elements';
import { GIVING_CARD_DATA } from '../../data/data';
import Greeting from '../../components/shared/Greeting/Greeting';
import { styles } from './styles';

function Home() {
  const { theme } = useTheme();
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(null);

  const renderVideoCards = ({ item, index }) => {
    return (
      <VideoCard
        title={item.title}
        place={item.place}
        timestamp={item.timestamp}
        description={item.description}
        currentIndex={index}
        currentVisibleIndex={currentVisibleIndex}
      />
    );
  };

  const handleItemsInViewPort = ({ viewableItems, changed }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentVisibleIndex(viewableItems[0].index);
    } else if (viewableItems.length === 0) {
      setCurrentVisibleIndex('pause');
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        minimumViewTime: 1500,
        itemVisiblePercentThreshold: 100,
      },
      onViewableItemsChanged: handleItemsInViewPort,
    },
  ]);

  return (
    <View style={styles.container}>
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
        viewabilityConfig={viewabilityConfigCallbackPairs.current}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </View>
  );
}

export default Home;
