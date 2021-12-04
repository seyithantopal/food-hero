import React, { FC } from 'react';
import { View, Text } from 'react-native';

import NavigationTop from '../../components/NavigationTop';
import styles from './styles';

const HomeScreen: FC = () => {
  return (
    <View style={styles.wrapper}>
      <NavigationTop />
    </View>
  );
};

export default HomeScreen;
