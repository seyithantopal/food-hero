import React, { FC } from 'react';
import { View, Text } from 'react-native';

import NavigationTop from '../../components/NavigationTop';
import Title from '../../components/Title';
import styles from './styles';

const HomeScreen: FC = () => {
  return (
    <View style={styles.wrapper}>
      <NavigationTop />
      <Title title={'Delicious\nfood for you'} />
    </View>
  );
};

export default HomeScreen;
