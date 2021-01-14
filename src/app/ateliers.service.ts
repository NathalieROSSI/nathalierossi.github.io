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

  sessions = [
    {
      type: "AIC",
      title: "Atelier intensif collectif",
      jours: 'Le samedi et dimanche',
      quand: '24 et 25 avril 2021',
      horaireMatin: '9h - 12h',
      horaireAprem: '14h - 17h',
      contrainte: 'Uniquement sur réservation',
      limite: 'Séance limitée à 5 chiens',
      ou: 'Aux écuries de Mane - 04300',

      introduction: "Merci à Sonia Barthelemy de m'accueillir de nouveau aux écuries de Mane (04300) pour l'organisation d'un atelier collectif.",
      commentaires: [
        {
          texte: "Le nombre de chiens est limité à 5 afin de nous permettre de respecter les gestes barrières"
        },
        {
          texte: "Comme toujours, le test d'évaluation de votre chien sera fait le samedi matin et si à 10h30 vous n'êtes pas convaincu(e), vous serez libre de partir et vous serez remboursé(e)."
        },
        {
          texte: "Merci de venir avec votre joie et bonne humeur, sans oublier vos ramasses crottes car le centre doit être impeccable à notre départ."
        }
      ]
    }
  ];

  getSessions() {
    return this.sessions;
  }

}