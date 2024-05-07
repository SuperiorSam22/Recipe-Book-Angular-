import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllRecipeComponent } from './components/all-recipe/all-recipe.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { LoginComponent } from './components/login/login.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'all-recipe', component:AllRecipeComponent},
  {path: 'add-recipe', component:InputFormComponent, canActivate: [AuthguardService]},
  {path: 'deitals-page', component:DetailsPageComponent},
  {path: 'recipes/:id', component: DetailsPageComponent, canActivate: [AuthguardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
