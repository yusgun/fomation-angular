import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {​​ FormsModule, ReactiveFormsModule }​​ from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';
import { ParentComponent } from './heritage/parent/parent.component';
import { EnfantComponent } from './heritage/enfant/enfant.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    FormulaireDynamiqueComponent,
    ParentComponent,
    EnfantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
