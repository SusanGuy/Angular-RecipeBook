import { RecipeService } from './../../services/recipe.services';
import { Recipe } from './../recipe.model';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() public recipe:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList=()=>{
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
