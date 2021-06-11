import React, { useRef, useState } from 'react';
import { StatusBar, FlatList, ViewToken, View } from 'react-native';
import VideoCard from '../../components/VideoCard/VideoCard';
import AccountsOverview from '../../components/AccountsOverview/AccountsOverview';
import { GIVING_CARD_DATA, IGivingCardData } from '../../data/data';
import Greeting from '../../components/shared/Greeting/Greeting';
import { useTheme } from 'react-native-elements';
import { styles } from './styles';

interface IVideoCardProps {
  item: IGivingCardData;
  index: number;
}

interface IVisibleIndexState {
  currentVisibleIndex: null | number;
}

function Home() {
  const { theme } = useTheme();
  const [currentVisibleIndex, setCurrentVisibleIndex] =
    useState<IVisibleIndexState['currentVisibleIndex']>();

  const renderVideoCards: React.FC<IVideoCardProps> = ({
    item,
    index,
  }): JSX.Element => {
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

  const handleItemsInViewPort = ({
    viewableItems,
  }: {
    viewableItems: Array<ViewToken>;
  }): void => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentVisibleIndex(viewableItems[0].index);
    } else if (viewableItems.length === 0) {
      setCurrentVisibleIndex(10);
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
    <>
      <FlatList
        style={[theme.layout.container]}
        data={GIVING_CARD_DATA}
        ListHeaderComponent={
          <>
            <StatusBar barStyle="light-content" />
            <Greeting />
            <AccountsOverview />
          </>
        }
        ListFooterComponent={<View style={styles.container} />}
        renderItem={renderVideoCards}
        keyExtractor={item => item.id}
        viewabilityConfig={viewabilityConfigCallbackPairs.current}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </>
  );
}

export default Home;
