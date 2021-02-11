import { ShoppingListService } from './../../services/shopping-list.services';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem=():void=>{
    const {nativeElement:{value:name}}=this.nameInputRef;
    const  {nativeElement:{value:amount}}=this.amountInputRef;
    this.shoppingListService.addNewIngredient(name,amount);
  }

}
