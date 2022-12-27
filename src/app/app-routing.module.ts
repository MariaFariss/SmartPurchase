import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteGraphiqueComponent } from './carte-graphique/carte-graphique.component';
import { HomeComponent } from './home/home.component';
import { PcFixeComponent } from './pc-fixe/pc-fixe.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { ResSearchComponent } from './res-search/res-search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path : "resSearch", component: ResSearchComponent},
  {path: "carteGraphique", component: CarteGraphiqueComponent},
  {path: "pcFixe", component: PcFixeComponent},//on ajoute les routes pour les pc fixe 
  {path: "pcPortable", component: PcPortableComponent}, //on ajoute les routes pour les pc portable
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
