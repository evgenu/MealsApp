import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/meals-data";

const MealDetailScreen = ({ route, navigation }) => {

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title='Tap me!'/>
      }
    });
  }, [navigation])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails 
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.textStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listInnerContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          {selectedMeal.ingredients.map(ingredient => (
            <View style={styles.listItem}><Text style={styles.itemText} key={ingredient}>{ingredient}</Text></View>
          ))}
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>      
          {selectedMeal.steps.map(step => (
            <View style={styles.listItem}><Text style={styles.itemText} key={step}>{step}</Text></View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  textStyle: {
    color: 'white'
  },
  subtitleContainer: {
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listInnerContainer: {
    width: '80%'
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8, 
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497'
  },
  itemText: {
    color: '#351401',
    textAlign: 'center'
  }
});