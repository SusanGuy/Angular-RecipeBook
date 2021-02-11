import { RecipeService } from './../../services/recipe.services';
import { Recipe } from './../recipe.model';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public recipe:Recipe;
  constructor(private recipeService:RecipeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe((params:Params)=>{
        const id:number=+params['id'];
        this.recipe=this.recipeService.getRecipeSelected(id);
      })
  }

  onAddToShoppingList=()=>{
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
