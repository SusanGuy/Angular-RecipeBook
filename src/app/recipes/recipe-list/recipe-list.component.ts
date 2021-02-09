import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('A test Recipe','This is a new recipe','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),
    new Recipe('My Recipe','This is a new recipe','https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'),

  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected=(recipe:Recipe):void=>{
    this.recipeWasSelected.emit(recipe)
  }
}
