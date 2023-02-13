import { Component, OnInit } from '@angular/core';
import { Recipes } from '../Recipes.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
 recipies: Recipes [] =[
  new Recipes('Apple','Fruit','https://thumbs.dreamstime.com/z/ripe-red-apple-fruit-apple-half-green-leaf-isolated-white-background-apples-leaf-clipping-path-red-apple-121347277.jpg'), new Recipes('ghh','kk','https://www.starhealth.in/blog/wp-content/uploads/2022/11/fineapple.jpg')
 ];
 name :string='';
 des :string ='';
 img :string ='';
  constructor() { }

  ngOnInit(): void {
  }
  addItem(){
    debugger
    this.recipies.push(new Recipes(this.name,this.des,this.img));
  }
}
