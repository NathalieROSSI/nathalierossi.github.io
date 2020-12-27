import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AteliersService {

  ateliers = [
    {
      id: "AEI",
      title: 'Atelier essentiel individuel',
      subTitle: 'Chiens à partir de 3 mois',
      format: '4 séances de 1 heure',
      price: '350 €',
      comment: '1 séance par semaine'
    },
    {
      id: "AII",
      title: 'Atelier individuel intensif',
      subTitle: 'Chiens à partir de 6 mois',
      format: '2 séances de 3 heures',
      price: '400 €',
      comment: 'Possibilité de grouper les 2 séances'
    },
    {
      id: "AIR",
      title: 'Atelier individuel renforcé',
      subTitle: 'Pour chiens difficiles ou agressifs',
      format: '1 jour et demi',
      price: '490 €',
      comment: 'Séances en terrain neutre'
    },
    {
      id: "AIC",
      title: 'Atelier intensif collectif',
      subTitle: 'Chiens à partir de 6 mois',
      format: '2 jours',
      price: '290 €',
      comment: 'Le nombre de chiens peut varier'
    }
  ];

  constructor() { }

  get() {
    return this.ateliers;
  }

  getAtelier(atelierId) {
    return this.ateliers.find( atelier => atelier.id === atelierId );
  }
}
