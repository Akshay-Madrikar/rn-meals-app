import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const caId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((cat) => cat.id === caId);
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' });
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const caId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((cat) => cat.id === caId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CategoryMealsScreen;
