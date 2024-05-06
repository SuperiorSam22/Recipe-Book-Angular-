import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-recipe-filter',
  templateUrl: './recipe-filter.component.html',
  styleUrls: ['./recipe-filter.component.scss']
})
export class RecipeFilterComponent {

  @Input() allRecipes: Recipe[] = []; // Array of all recipes (received from parent)

  @Output() filteredRecipes = new EventEmitter<Recipe[]>(); // Output event for filtered recipes

  searchTerm: string = ''; // Search term state

  onFilterChange() { // No parameter needed here
    const filtered = this.allRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    
    this.filteredRecipes.emit(filtered); // Emit the filtered recipes
  }
}