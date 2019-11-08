import { ShoppinglistService } from './../../shoppinglist.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild ('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;  
  //@Output() ingredientAdded =new EventEmitter<Ingredient>();
// IngredientName:string
// Iamount:number;
  constructor( private shoppingservice:ShoppinglistService) { }

  ngOnInit() {
  }
  addShoppingDetails(){
          const name=this.nameInputRef.nativeElement.value;
          const amount =this.amountInputRef.nativeElement.value;
          const newIngredirent =new Ingredient(name,amount);
          this.shoppingservice.addIngredient(newIngredirent);
          // this.shoppingservice.ingredientAdded.emit(newIngredirent); 

  }

}
