import React, { FC, useRef, useCallback } from 'react';
import { View, Text, Dimensions, Animated } from 'react-native';
import { CategoryProps } from '../../utils/constants/interfaces';

import styles from './styles';

const Category: FC<CategoryProps> = ({ category, onPressCategory }) => {
  const flatListRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width, height } = Dimensions.get('screen');
  const onItemPress = useCallback(i => {
    flatListRef?.current?.scrollToOffset({
      offset: i * width,
    });
  });
  return (
    <View style={styles.wrapper}>
      <Animated.FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces={false}
        data={category}
        renderItem={({ item }) => (
          <Text
            onPress={() => {
              onPressCategory(item.name);
              onItemPress(item.id - 1);
            }}
            style={
              item.active
                ? [styles.categoryName, styles.categoryNameActive]
                : [styles.categoryName]
            }>
            {item.name}
          </Text>
        )}
      />
    </View>
  );
};

export default Category;
