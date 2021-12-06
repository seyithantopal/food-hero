import React, { FC, useState, useEffect } from 'react';
import { View } from 'react-native';
import { categoryData } from '../../utils/constants/mockData';
import { CategoryType, FoodType } from '../../utils/constants/interfaces';
import { foodData } from '../../utils/constants/mockData';
import { APPLICATION_MOTTO } from '../../utils/constants/common';

// Components
import NavigationTop from '../../components/NavigationTop';
import NavigationBottom from '../../components/NavigationBottom';
import Title from '../../components/Title';
import Searchbox from '../../components/Searchbox';
import Category from '../../components/Category';
import FoodList from '../../components/FoodList';
import styles from './styles';

const HomeScreen: FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>(categoryData);
  const [foods, setFoods] = useState<FoodType[]>(foodData);
  const [filteredFoods, setFilteredFoods] = useState<FoodType[]>(foods);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].name,
  );

  useEffect(() => {
    changeCategory(selectedCategory);
    const aa = foods.filter(food => food.category === selectedCategory);
    setFilteredFoods(aa);
  }, [selectedCategory]);

  const changeCategory = (categoryName: string) => {
    const newCategories = categories.reduce(
      (acc: CategoryType[], cur: CategoryType) => {
        acc.push({
          ...cur,
          active: cur.name === categoryName ? true : false,
        });
        return acc;
      },
      [],
    );
    setCategories(newCategories);
  };

  const handleCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.paddingWrapper}>
        <NavigationTop />
        <Title title={APPLICATION_MOTTO} style={styles.title} />
        <Searchbox />
      </View>
      <Category category={categories} onPressCategory={handleCategory} />
      <FoodList foodData={filteredFoods} />
      <NavigationBottom />
    </View>
  );
};

export default HomeScreen;
