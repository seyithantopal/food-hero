import React, { FC, useState } from 'react';
import { View } from 'react-native';
import Icon from '../Icon';

// Icons
import Home from './Icons/Home';
import Heart from './Icons/Heart';
import User from './Icons/User';
import History from './Icons/History';

import styles from './styles';

const NavigationBottom: FC = () => {
  const [active, setActive] = useState(0);

  const icons = [
    { icon: <Home /> },
    { icon: <Heart /> },
    { icon: <User /> },
    { icon: <History /> },
  ];
  return (
    <View style={styles.wrapper}>
      <View style={styles.menu}>
        {icons.map(({ icon }, index) => (
          <View key={index}>
            <Icon
              onPress={() => {
                setActive(index);
              }}
              {...{ active, index }}>
              {icon}
            </Icon>
          </View>
        ))}
      </View>
    </View>
  );
};

export default NavigationBottom;
