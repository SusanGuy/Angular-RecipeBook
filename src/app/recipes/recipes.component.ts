import { RecipeService } from './../services/recipe.services';
import { Recipe } from './recipe.model';
import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
 selectedRecipe:Recipe;

  constructor(private recipeSerive:RecipeService) { }

  ngOnInit(): void {
    this.recipeSerive.getRecipeSelected().subscribe((recipe:Recipe):void=>{this.selectedRecipe=recipe});
  }

}
