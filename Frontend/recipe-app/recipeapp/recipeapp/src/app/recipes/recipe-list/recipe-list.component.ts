import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe', 'https://img.freepik.com/premium-vector/confectionery-cooking-book-with-recipes-white-background_665163-216.jpg'),
    new Recipe('Test Recipe', 'This is a test recipe', 'https://img.freepik.com/premium-vector/confectionery-cooking-book-with-recipes-white-background_665163-216.jpg')
  ];

  constructor() {}

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
