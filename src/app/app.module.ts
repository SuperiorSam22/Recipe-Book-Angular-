import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AllRecipeComponent } from './components/all-recipe/all-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeCardsComponent } from './components/recipe-cards/recipe-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputFormComponent } from './components/input-form/input-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { RecipeFilterComponent } from './components/recipe-filter/recipe-filter.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AllRecipeComponent,
    RecipeCardsComponent,
    FooterComponent,
    InputFormComponent,
    DetailsPageComponent,
    RecipeFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
