import React, { FC, useRef } from 'react';
import { View, Animated } from 'react-native';
import { FoodType } from '../../utils/constants/interfaces';
import { FULL_SIZE } from '../../utils/constants/common';
import Food from '../Food';

import styles from './styles';

const FoodList: FC<{ foodData: FoodType[] }> = ({ foodData }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.wrapper}>
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
    </View>
  );
};

export default FoodList;
