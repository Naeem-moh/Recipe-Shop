import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { headerComponent } from './UI/header/header.component';
import { ShopingListComponent } from './features/shopingList/shoping-list/shoping-list.component';
import { ShopingListEditComponent } from './features/shopingList/shoping-list-edit/shoping-list-edit.component';
import { RecipeListComponent } from './features/recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './features/recipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './features/recipeBook/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    ShopingListComponent,
    ShopingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
