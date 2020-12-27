import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { AtelierComponent } from './atelier/atelier.component';
import { AteliersComponent } from './ateliers/ateliers.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { AppRoutingModule } from './app-routing.module';
import { ParcoursComponent } from './parcours/parcours.component';
import { AtelierDetailsComponent } from './atelier-details/atelier-details.component';
import { AtelierChoisiComponent } from './atelier-choisi/atelier-choisi.component';
import { TeasingComponent } from './teasing/teasing.component';
import { ContactComponent } from './contact/contact.component';
import { MethodeComponent } from './methode/methode.component';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
