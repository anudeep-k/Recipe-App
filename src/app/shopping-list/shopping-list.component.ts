import { ShoppinglistService } from './../shoppinglist.service';
import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingservice:ShoppinglistService) { }

  ngOnInit() {
    this.ingredients=this.shoppingservice.getIngredients();

    this.shoppingservice.ingredientAdded.subscribe((ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
    })
  }

}
