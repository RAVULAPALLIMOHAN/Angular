import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/Models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
ingredients :Ingredient[] =[
  new Ingredient('Apple','5')
];

  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
