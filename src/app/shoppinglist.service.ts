import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
   ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  ingredientAdded =new EventEmitter<Ingredient[]>()

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ing:Ingredient){
    this.ingredients.push(ing);
  console.log(this.ingredients);
  this.ingredientAdded.emit(this.ingredients.slice());
  }
}
