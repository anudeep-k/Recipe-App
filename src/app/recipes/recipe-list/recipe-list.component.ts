import { RecipeService } from './../../recipe.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected= new EventEmitter<Recipe>();
  
   recipes:Recipe[];
  constructor( private recipe:RecipeService) { }

  ngOnInit(){
    this.recipes=this.recipe.recipes

  }
  getRecipe(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }

}
