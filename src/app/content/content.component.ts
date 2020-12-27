import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContentComponent implements OnInit {

  constructor( private contactInfoService : ContactInfoService ) {}
  contactInfo: any;

  ngOnInit(): void {

    this.contactInfo = this.contactInfoService.get();
  }

}
