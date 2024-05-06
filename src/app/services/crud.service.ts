import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Recipe } from '../interfaces/recipe';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient
  ) { }

  getAllRecipes(): Observable<Recipe[]> {
    const url = 'http://localhost:3000/recipes';
    return this.http.get<Recipe[]>(url).pipe(
      map(data => data as Recipe[]),
      catchError(error => {
        console.error('Error fetching recipes', error);
        return of([]);
      })
    )
  }

  addRecipe(recipeData: Recipe): Observable<Recipe> {
    const url = 'http://localhost:3000/recipes';
    return this.http.post<Recipe>(url, recipeData)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteRecipe(id: number): Observable<any> { // Response type can be any
    const url = `http://localhost:3000/recipes/${id}`; // Construct URL with ID
    
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRecipeById(id: number): Observable<Recipe> {
    const url = `http://localhost:3000/recipes/${id}`;// Construct URL with ID

    return this.http.get<Recipe>(url)
      .pipe(
        map(data => data as Recipe), // Assuming your API returns a single recipe object
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred: ' + error.error.message;
    } else {
      errorMessage = `${error.status} : ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  


  
}
