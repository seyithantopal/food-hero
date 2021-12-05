import React, { FC } from 'react';
import { View } from 'react-native';

import Menu from './Icons/Menu';
import Cart from './Icons/Cart';
import styles from './styles';

const NavigationTop: FC = () => {
  return (
    <View>
      <View style={styles.menu}>
        <Menu />
        <Cart />
      </View>
    </View>
  );
};

export default NavigationTop;
