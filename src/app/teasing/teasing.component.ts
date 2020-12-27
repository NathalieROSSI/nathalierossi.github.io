import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-teasing',
  templateUrl: './teasing.component.html',
  styleUrls: ['./teasing.component.css']
})
export class TeasingComponent implements OnInit {

  constructor( private contactInfoService : ContactInfoService ) {}
  contactInfo;

  ngOnInit(): void {

    this.contactInfo = this.contactInfoService.get();
  }
}
