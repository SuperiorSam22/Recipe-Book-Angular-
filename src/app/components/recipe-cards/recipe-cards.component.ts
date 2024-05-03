import { Component, enableProdMode, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.scss']
})
export class RecipeCardsComponent implements OnInit {

  recipes: Recipe[] = [];
  error: string = '';

  constructor(
    private crudService: CrudService
  ){

  }

  ngOnInit(): void {
    this.crudService.getAllRecipes().subscribe({
      next:(response: Recipe[]) => this.recipes = response, 
      error: (error) => this.error = 'Error fetching data'
    })
  }
}
