import React, { FC } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const HomeScreen: FC = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
