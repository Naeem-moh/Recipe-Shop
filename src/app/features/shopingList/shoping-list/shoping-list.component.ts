import { Component } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.css',
})
export class ShopingListComponent {
  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Orange', 4),
  ];
}
