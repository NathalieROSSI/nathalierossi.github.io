import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AteliersComponent } from './ateliers/ateliers.component';
import { AtelierChoisiComponent } from './atelier-choisi/atelier-choisi.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { MethodeComponent } from './methode/methode.component';


const routes: Routes = [
  //{ path: 'accueil', component: ContentComponent },
  { path: 'ateliers', component: AteliersComponent },
  { path: 'atelier/:atelierId', component: AtelierChoisiComponent },
  { path: 'parcours', component: ParcoursComponent },
  { path: 'exercices', component: ExercicesComponent },
  { path: 'contact', component: ContactComponent  },
  { path: 'localisation', component: MapComponent  },
  { path: 'methode', component: MethodeComponent  },
  { path: '', pathMatch: 'full', component: ContentComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
