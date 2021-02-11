import { RecipeService } from './../../services/recipe.services';
import { Recipe } from './../recipe.model';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public recipe:Recipe;
  constructor(private router:Router,private recipeService:RecipeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe((params:Params)=>{
        const id:number=+params['id'];
        this.recipe=this.recipeService.getRecipeSelected(id);
      })
  }

  onAddToShoppingList=():void=>{
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe=():void=>{
    this.router.navigate(["edit"],{relativeTo:this.route})
  }

}
