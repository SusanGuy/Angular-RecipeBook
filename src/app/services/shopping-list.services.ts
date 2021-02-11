import { Ingredient } from './../shared/ingredient.model';
import { Injectable ,EventEmitter} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    ingredientsChanged:EventEmitter<Ingredient[]>=new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[]=[
    new Ingredient("Apples",5),
    new Ingredient("Tomatoes",10)
  ];

    public getIngredients() : Ingredient[] {
    return [...this.ingredients];
    }

    constructor() { }
    public addNewIngredient=(name:string,amount:number):void=>{
        this.ingredients.push(new Ingredient(name,amount));
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    public addIngredients =(ingredients:Ingredient[]):void=>{
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

}