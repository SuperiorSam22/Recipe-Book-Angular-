import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {

  recipes: Recipe[] = [];
  error: string = '';

  constructor(
    private http: HttpClient,
    private crudService: CrudService
  ){

  }

  ngOnInit(): void {
    this.crudService.getAllRecipes().subscribe({
      next:(recipes: Recipe[]) => this.recipes = recipes,
      error: (error) => this.error = 'Error Fetching recipes'
    });
  }



}
