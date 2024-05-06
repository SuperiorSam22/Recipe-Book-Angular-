import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Recipe } from 'src/app/interfaces/recipe';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit{

  inputForm!: FormGroup;
  recipes: Recipe[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private recipe: CrudService,
  ){

  }

  ngOnInit(): void {
    // this.initForm();
    this.createForm();
  }
  

  // initForm() {
  //   this.inputForm = this.formBuilder.group({
  //     title: ['', Validators.required],
  //     description: ['', Validators.required],
  //     ingredients: this.formBuilder.array([]),
  //     instructions: this.formBuilder.array([])
  //   });
  // }

  createForm() {
    this.inputForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.formBuilder.array([]),
      instructions: this.formBuilder.array([])
    });
  }
  
  get ingredientsFromArray(): FormArray { 
    return this.inputForm.get('ingredients') as FormArray;
  }

  get instructionsFormArray(): FormArray {
    return this.inputForm.get('instructions') as FormArray;
  }

  addIngredient() {
    this.ingredientsFromArray.push(this.formBuilder.control(''));
  }

  addInstructions() {
    this.instructionsFormArray.push(this.formBuilder.control(''));
  }

  onSubmit() {
    if(this.inputForm.valid) {
      const newRecipe = this.inputForm.value as Recipe;
      this.recipe.addRecipe(newRecipe).subscribe({
        next: (createdRecipe: any) => {
          // Handle successful creation (e.g., add to UI, clear form)
          this.recipes.push(createdRecipe); // Assuming UI update logic
          this.inputForm.reset();
          console.log("Recipe created successfully:", createdRecipe);
        },
        error: (error) => {
          // Handle errors
          console.error("Error adding recipe:", error);
        }
      });
    }
  }


}
