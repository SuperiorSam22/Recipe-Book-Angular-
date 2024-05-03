import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  
}
