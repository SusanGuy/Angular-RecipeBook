
import { Recipe } from './../../recipe.model';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Input() index:number;
  constructor() { }

  ngOnInit(): void {

  }


}
