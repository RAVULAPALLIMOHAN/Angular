import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/Main/main/main.component';
import { FirstComponent } from './Components/Main/first/first.component';
import { LastComponent } from './Components/Main/last/last.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/Header/header/header.component';
import { RecipesComponent } from './Components/Recipes/recipes/recipes.component';
import { RecipeListComponent } from './Components/Recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './Components/Recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './Components/Recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './Components/Shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Components/Shopping/shopping-edit/shopping-edit.component';
import { OneComponent } from './Components/Others/one/one.component';
import { SecondComponent } from './Components/Others/second/second.component';
import { ThirdComponent } from './Components/Others/third/third.component';
import { DemodirectivesComponent } from './Components/Directives/demodirectives/demodirectives.component';
import { DropdownDirective } from './Components/Dropdown/dropdown.directive'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    FirstComponent,
    LastComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    OneComponent,
    SecondComponent,
    ThirdComponent,
    DemodirectivesComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
