import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tomato Salad',
      'Simple and healthy',
      'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg',
      [
        new Ingredient('Tomato', 10),
        new Ingredient('Oil', 20)
      ]),
    new Recipe(
      'Wiener Schnitzel',
      'Just awesome!!!',
      'http://lovethatbite.com/wp-content/uploads/2018/10/wiener-schnitzel-kalb-veal-meat-cranberry-lemon-chives-potato-salad-salad-wiener-austrian-food-dish-original-recipe.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Pizza',
      'Nothing is better then a good PIZZA!',
      'https://kep.cdn.indexvas.hu/1/0/1770/17701/177013/17701396_f88fa84c634099a3df6fcd65708aa953_wm.jpg',
      [
        new Ingredient('Mushroom', 4),
        new Ingredient('Mozarella', 10),
        new Ingredient('Salami', 5)
      ]),
    new Recipe(
      'Hamburger',
      'The best burger in town!!!',
      'https://media2.s-nbcnews.com/j/newscms/2019_03/1401615/anne-burrell-killer-turkey-burger-today-main-today-190114-02_221ba7fea3790e918974cc7c16a29b64.today-inline-large.jpg',
      [
        new Ingredient('Roll', 1),
        new Ingredient('Burger meat', 1),
        new Ingredient('Lettuce', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
