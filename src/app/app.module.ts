import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AtelierChoisiComponent } from './atelier-choisi/atelier-choisi.component';
import { AtelierComponent } from './atelier/atelier.component';
import { AtelierDetailsComponent } from './atelier-details/atelier-details.component';
import { AteliersComponent } from './ateliers/ateliers.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { MethodeComponent } from './methode/methode.component';
import { NgModule } from '@angular/core';
import { ParcoursComponent } from './parcours/parcours.component';
import { PlanningComponent } from './planning/planning.component';
import { SessionComponent } from './session/session.component';
import { TeasingComponent } from './teasing/teasing.component';
import { CovidComponent } from './covid/covid.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    AtelierComponent,
    AteliersComponent,
    ExercicesComponent,
    ParcoursComponent,
    AtelierDetailsComponent,
    AtelierChoisiComponent,
    TeasingComponent,
    ContactComponent,
    MethodeComponent,
    PlanningComponent,
    SessionComponent,
    CovidComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
