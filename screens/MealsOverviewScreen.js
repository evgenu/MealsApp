import { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/meals-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) >= 0);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle
    })
  }, [categoryId, navigation])

  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageURL: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
    }

    return (
      <MealItem {...mealItemProps} />
    );
  } 

  return (
    <View style={styles.container}>
      <FlatList 
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});