import { Ingredient } from './../shared/ingredient.model';
import { Injectable ,EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    ingredientsChanged:Subject<Ingredient[]>=new Subject<Ingredient[]>();
    private ingredients:Ingredient[]=[
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ];

    public getIngredients() : Ingredient[] {
        console.log("ayo")
    return [...this.ingredients];
    }

    constructor() { }
    public addNewIngredient=(name:string,amount:number):void=>{
        this.ingredients.push(new Ingredient(name,amount));
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    public addIngredients =(ingredients:Ingredient[]):void=>{
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice())
    }

}