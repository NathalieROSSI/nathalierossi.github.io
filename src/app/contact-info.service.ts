import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  constructor() { }
  contactInfo = {
    fullname: 'Nathalie ROSSI',
    telephone: '06.10.42.75.08',
    eMail: 'nathalierossi.educateurcanin@gmail.com',
    mailTo: 'mailTo:nathalierossi.educateurcanin@gmail.com?subject=Education%20Canine%20-%20Demande%20d%27information%20complementaire&body=Je%20souhaite%20obtenir%20des%20informations%20complementaires%20concernant%20l%27atelier%3A%0A...%0A%0A%0A%0A',
    job: 'Educateur Canin Comportementaliste',
    facebookUrl: 'https://www.facebook.com/nathalie.rossi.71619',
    youtubeUrl: 'https://www.youtube.com/channel/UCJHGrh_9T1WkYnLWS-jkUQg',
    instagramUrl: 'https://www.instagram.com/nathalie.rossi.educateur.canin/',
    siret: '87788911300016',
    adresseRue: '605 Chemin des Olivettes',
    adresseVille: '04230 CRUIS',
    acompte: '100€'
  };

  get() {
    return this.contactInfo;
  }
}
