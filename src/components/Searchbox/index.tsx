import React, { FC, useState } from 'react';
import { View, TextInput, Image } from 'react-native';

import searchIcon from '../../assets/images/search.png';
import styles from './styles';

const Searchbox: FC = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          value={search}
          placeholder="Search"
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.searchIconWrapper}>
        <Image source={searchIcon} style={styles.searchIcon} />
      </View>
    </View>
  );
};

export default Searchbox;
