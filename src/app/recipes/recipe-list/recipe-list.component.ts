import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test',
    'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2021/05/HiRes-Recipe-Pro-TuscanCreamyChickenPenne_RecipeOnly-020_V2.jpg?x53553'),
    new Recipe('A test recipe', 'this is a test',
    'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2021/05/HiRes-Recipe-Pro-TuscanCreamyChickenPenne_RecipeOnly-020_V2.jpg?x53553')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
