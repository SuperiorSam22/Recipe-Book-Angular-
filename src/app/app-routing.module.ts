import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllRecipeComponent } from './components/all-recipe/all-recipe.component';
import { InputFormComponent } from './components/input-form/input-form.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'all-recipe', component:AllRecipeComponent},
  {path: 'add-recipe', component:InputFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
