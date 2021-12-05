import React, { FC } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { FoodType } from '../../utils/constants/interfaces';
import {
  BOX_WIDTH,
  CELL_WIDTH,
  CELL_HEIGHT,
  SPACING,
} from '../../utils/constants/common';
import plateIcon from '../../assets/images/plate.png';

import styles from './styles';

const Food: FC<{ item: FoodType; index: number; scrollX: Animated.Value }> = ({
  item,
  index,
  scrollX,
}) => {
  const inputRange = [
    (index - 3) * BOX_WIDTH,
    index * BOX_WIDTH,
    (index + 3) * BOX_WIDTH,
  ];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
  });
  return (
    <Animated.View
      style={[
        styles(BOX_WIDTH, CELL_WIDTH, CELL_HEIGHT, SPACING).foodWrapper,
        {
          transform: [{ scale }],
          opacity: opacity,
        },
      ]}>
      <View style={styles().onBox}>
        <Image source={plateIcon} style={styles().foodImage} />
        <Text style={styles().foodName}>{item.name}</Text>
        <Text style={styles().foodPrice}>{item.price}</Text>
      </View>
    </Animated.View>
  );
};

export default Food;
