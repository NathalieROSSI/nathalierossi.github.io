import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AteliersService } from '../ateliers.service';
import { ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-teasing',
  templateUrl: './teasing.component.html',
  styleUrls: ['./teasing.component.css']
})
export class TeasingComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactInfoService : ContactInfoService,
    private ateliersService: AteliersService ) {}

  contactInfo: any;
  newAtelier: { id: string; title: string; subTitle: string; format: string; price: string; comment: string; };

  ngOnInit(): void {
    this.contactInfo = this.contactInfoService.get();

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.newAtelier = this.ateliersService.getAtelier('ACC');
    });
  }
}
