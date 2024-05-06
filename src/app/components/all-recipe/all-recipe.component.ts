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
    private crudService: CrudService
  ){

  }

  ngOnInit(): void {
    this.crudService.getAllRecipes().subscribe({
      next:(recipes: Recipe[]) => this.recipes = recipes,
      error: (error) => this.error = 'Error Fetching recipes'
    });
  }

  deleteRecipe(id: number) {
    this.crudService.deleteRecipe(id)
      .subscribe({
        next: () => {
          this.recipes = this.recipes.filter(recipe => recipe.id !== id); // Update UI
          console.log("Recipe deleted successfully!");
        },
        error: (error) => {
          console.error("Error deleting recipe:", error);
          // Handle errors (e.g., display error message to user)
        }
      });
  }



}
