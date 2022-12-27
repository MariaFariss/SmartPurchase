import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResSearchComponent } from './res-search/res-search.component';
import { PcComponantComponent } from './pc-componant/pc-componant.component';
import { FooterComponent } from './footer/footer.component';
import { CarteGraphiqueComponent } from './carte-graphique/carte-graphique.component';
import { PcFixeComponent } from './pc-fixe/pc-fixe.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ResSearchComponent,
    PcComponantComponent,
    FooterComponent,
    CarteGraphiqueComponent,
    PcFixeComponent,
    PcPortableComponent,
   

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
