import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AteliersService } from '../ateliers.service';
import { ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-atelier-choisi',
  templateUrl: './atelier-choisi.component.html',
  styleUrls: ['./atelier-choisi.component.css']
})
export class AtelierChoisiComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute, 
    private ateliersService: AteliersService, 
    private contactInfoService : ContactInfoService ) {}

  contactInfo: any; 
  currentAtelierId: any;
  currentAtelier: { id: string; title: string; subTitle: string; format: string; price: string; comment: string; };

  ngOnInit(): void {
    this.contactInfo = this.contactInfoService.get();

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.currentAtelierId = paramMap.get('atelierId');
      this.currentAtelier = this.ateliersService.getAtelier(this.currentAtelierId);
    });
  }
}
