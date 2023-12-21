import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import recipesApi from '../api/recipesApi';

const Recipes = ({ navigation }) => {
  const [fiveRecipes, setFiveRexipes] = useState();

  const getAllRecipes = async () => {
    const res = await recipesApi.getAll();
    // console.log("data", res.data);
    if (res.data) {
      setFiveRexipes(res.data);
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <View>
      <Text>12/18(月) ~ 12/22(金)</Text>
      <GestureHandlerRootView>
        <ScrollView>
          {fiveRecipes &&
            fiveRecipes.map((dateRecipe) => {
              // console.log("daterecipe2", recipesData);
              return (
                <View key={dateRecipe.id}>
                  <Text>{dateRecipe.date}</Text>
                  <GestureHandlerRootView>
                    <ScrollView
                      horizontal={true}
                      contentContainerStyle={{ flexDirection: 'row' }}
                    >
                      {dateRecipe.food.map((foodDetail) => {
                        const imgPath = foodDetail.imagePath.slice(0, -4);
                        return (
                          <View
                            key={foodDetail.foodId}
                            style={{ marginRight: 8 }}
                          >
                            <Image
                              style={styles.recipeImg}
                              source={{ uri: imgPath }}
                            />
                            <Button
                              title="12/10 主菜変更"
                              onPress={() =>
                                navigation.navigate('MainRecipesList')
                              }
                            />
                            <Button
                              title="12/10 副菜変更"
                              onPress={() =>
                                navigation.navigate('SideRecipesList')
                              }
                            />
                          </View>
                        );
                      })}
                    </ScrollView>
                  </GestureHandlerRootView>
                </View>
              );
            })}
        </ScrollView>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  recipeImg: {
    width: 100,
    height: 100,
  },
});

export default Recipes;
