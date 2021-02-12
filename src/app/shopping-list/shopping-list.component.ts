import { ShoppingListService } from './../services/shopping-list.services';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  private igChangeSub:Subscription;
  ingredients:Ingredient[];


  constructor(private shoppingListService:ShoppingListService) {

   }

  ngOnInit():void{

    this.ingredients=this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientsChanged.subscribe((ingredients):Ingredient[]=>this.ingredients=ingredients)
  }

  ngOnDestroy():void{
    this.igChangeSub.unsubscribe();
  }
}
