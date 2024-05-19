import { Component } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test reciepe',
      'this is a reciepe to test with',
      'https://media.istockphoto.com/id/1314002573/vector/oatmeal-cookie-recipe-home-cookbook-step-by-step-cooking-instructions.jpg?s=612x612&w=0&k=20&c=M4osdhl8A_9abAurnXKhGuLCk-pcV4XYGIaQnFbHQw8='
    ),
    new Recipe(
      'A test reciepe',
      'this is a reciepe to test with',
      'https://media.istockphoto.com/id/1314002573/vector/oatmeal-cookie-recipe-home-cookbook-step-by-step-cooking-instructions.jpg?s=612x612&w=0&k=20&c=M4osdhl8A_9abAurnXKhGuLCk-pcV4XYGIaQnFbHQw8='
    ),
    new Recipe(
      'A test reciepe',
      'this is a reciepe to test with',
      'https://media.istockphoto.com/id/1314002573/vector/oatmeal-cookie-recipe-home-cookbook-step-by-step-cooking-instructions.jpg?s=612x612&w=0&k=20&c=M4osdhl8A_9abAurnXKhGuLCk-pcV4XYGIaQnFbHQw8='
    ),
    new Recipe(
      'A test reciepe',
      'this is a reciepe to test with',
      'https://media.istockphoto.com/id/1314002573/vector/oatmeal-cookie-recipe-home-cookbook-step-by-step-cooking-instructions.jpg?s=612x612&w=0&k=20&c=M4osdhl8A_9abAurnXKhGuLCk-pcV4XYGIaQnFbHQw8='
    ),
  ];
}
