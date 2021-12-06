import React, { FC, useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { FoodType } from '../../utils/constants/interfaces';
import { FULL_SIZE } from '../../utils/constants/common';
import Food from '../Food';

import styles from './styles';

const FoodList: FC<{ foodData: FoodType[] }> = ({ foodData }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fadeValue = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeValue, {
      toValue: 5,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.cubic,
    }).start();
  }, [fadeValue]);

  return (
    <Animated.View style={[styles.wrapper, { opacity: fadeValue }]}>
      <Animated.FlatList
        data={foodData}
        horizontal
        snapToInterval={FULL_SIZE}
        decelerationRate='normal'
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        renderItem={({ item, index }) => (
          <Food item={item} index={index} scrollX={scrollX} />
        )}
      />
    </Animated.View>
  );
};

export default FoodList;
