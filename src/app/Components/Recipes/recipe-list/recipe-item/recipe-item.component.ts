import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
 
import { Recipes } from '../../Recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
@Input() recipeI! :Recipes  ;
@Output() recopeSelected = new EventEmitter<void>(); 
  constructor() { }

  ngOnInit(): void {
  }
onSelected(){
this.recopeSelected.emit();
}
}
