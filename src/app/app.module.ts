import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { headerComponent } from './UI/header/header.component';
import { ShopingListComponent } from './features/shopingList/shoping-list/shoping-list.component';
import { ShopingListEditComponent } from './features/shopingList/shoping-list-edit/shoping-list-edit.component';
import { IngredientComponent } from './features/shopingList/ingredient/ingredient.component';
import { RecipeListComponent } from './features/recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './features/recipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './features/recipeBook/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './features/recipeBook/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    ShopingListComponent,
    ShopingListEditComponent,
    IngredientComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
