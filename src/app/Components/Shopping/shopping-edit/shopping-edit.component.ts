import { Component, ElementRef, OnInit, ViewChild,EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/Models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef! :ElementRef;
@ViewChild('amountInput') amountInputRef !:ElementRef;
//ingredentAdded = new EventEmitter<{name:string,amount:string}>();
@Output() ingredentAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAdd(){
const name = this.nameInputRef.nativeElement.value;
const amount = this.amountInputRef.nativeElement.value;
const newIngredient = new Ingredient(name,amount);
this.ingredentAdded.emit(newIngredient);
  }
  onClear(){
    debugger
    this.nameInputRef.nativeElement.value ='';
    this.amountInputRef.nativeElement.value ='';
  }

}
