import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a simply test',
      'https://picsum.photos/id/1/200'
    ),
    new Recipe(
      'A test recipe',
      'This is a simply test',
      'https://picsum.photos/id/2/200'
    ),
    new Recipe(
      'A test recipe',
      'This is a simply test',
      'https://picsum.photos/id/3/200'
    )
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}