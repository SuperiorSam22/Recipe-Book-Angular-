import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/interfaces/recipe';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit{

  recipe: Recipe | null = null;
  recipeId!: number;

  constructor(private route: ActivatedRoute,
    private crudService: CrudService
  ){

  }

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id') as unknown as number;
    this.fetchRecipeDetails();
  }

  fetchRecipeDetails() {
    this.crudService.getRecipeById(this.recipeId) // Replace with your method name
      .subscribe({
        next: (recipe) => this.recipe = recipe,
        error: (error) => console.error("Error fetching recipe details:", error)
      });
  }
}
