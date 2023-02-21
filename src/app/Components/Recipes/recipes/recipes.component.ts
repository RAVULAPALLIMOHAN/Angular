import { Component, OnInit } from '@angular/core';
import { Recipes } from '../Recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
 selectedRecipe! :Recipes;
  constructor() { }

  ngOnInit(): void {
  }

}
