import { Component, Input, OnInit } from '@angular/core';
import { Recipes } from '../Recipes.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {
 @Input() recipe!: Recipes;
  constructor() { }

  ngOnInit(): void {
  }

}
