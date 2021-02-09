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
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem=():void=>{
    const {nativeElement:{value:name}}=this.nameInputRef;
    const  {nativeElement:{value:amount}}=this.amountInputRef;
    this.ingredientAdded.emit(new Ingredient(name,amount));
  }

}
