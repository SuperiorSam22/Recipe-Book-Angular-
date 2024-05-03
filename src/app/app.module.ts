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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AllRecipeComponent,
    RecipeCardsComponent,
    FooterComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
