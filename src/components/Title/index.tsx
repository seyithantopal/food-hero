import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles';

const Title: FC<{ title: string; style?: any }> = ({ title, style }) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;
