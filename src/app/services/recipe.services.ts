import { ShoppingListService } from './shopping-list.services';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './../recipes/recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RecipeService {
    constructor(private shoppingListService:ShoppingListService) { }
    private recipes:Recipe[]=[
    new Recipe(
      'Veg Momo',
      'Vegetarian Momo from Kathmandu',
      'https://www.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg',
      [
        new Ingredient("Cabbage",1),
        new Ingredient("Carrot",2),
        new Ingredient("Wrapper",2),
      ]
    ),
     new Recipe(
      'Veg Chowmein',
      'Vegetarian Chowmein from Chitwan',
      'https://www.sailusfood.com/wp-content/uploads/2016/03/recipe-of-momos.jpg',
      [
        new Ingredient("Sphagetti",3),
        new Ingredient("Peas",2),
        new Ingredient("Tomato Sauce",1),
      ]
    ),
  ];
    public getRecipes=():Recipe[]=> [...this.recipes];
    private recipeSelected:EventEmitter<Recipe>=new EventEmitter<Recipe>();
    public getRecipeSelected=(): EventEmitter<Recipe>=>{
        return this.recipeSelected;
    }

    addIngredientsToShoppingList=(ingredients:Ingredient[]):void=>{
        this.shoppingListService.addIngredients(ingredients);
    }
}