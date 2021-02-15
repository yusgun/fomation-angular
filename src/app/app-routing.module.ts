import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ExoEnfantComponent } from './exoHeritage/exo-enfant/exo-enfant.component';
import { ExoParentComponent } from './exoHeritage/exo-parent/exo-parent.component';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';
import { PersonneComponent } from './personne/personne.component';

const routes: Routes = [
  {path: "", component: ExoParentComponent},
  {path: "heritage", component: ExoEnfantComponent},
  {path: "error", component: ErrorComponent},
  {path: "formulaire", component: PersonneComponent, children:[
    {path: "dynamique", component: FormulaireDynamiqueComponent}
  ]},
  {path: "**", redirectTo: "error"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
