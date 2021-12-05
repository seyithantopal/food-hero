import React, { FC, cloneElement, ReactElement } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';

const Icon: FC<{
  children: ReactElement;
  active: number;
  onPress: () => void;
  index: number;
}> = ({ children, active, onPress, index }) => {
  const isActive = active === index;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        {cloneElement(children, { active: isActive })}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Icon;
