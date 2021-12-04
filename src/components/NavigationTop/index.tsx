import React, { FC } from 'react';
import { View, Image } from 'react-native';

import menuIcon from '../../assets/images/menu-32x32.png';
import cartIcon from '../../assets/images/cart-32x32.png';
import styles from './styles';

const NavigationTop: FC = () => {
  return (
    <View>
      <View style={styles.menu}>
        <Image source={menuIcon} />
        <Image source={cartIcon} />
      </View>
    </View>
  );
};

export default NavigationTop;
