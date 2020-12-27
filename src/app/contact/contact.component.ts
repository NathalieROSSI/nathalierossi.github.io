import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private contactInfoService : ContactInfoService ) {}
  contactInfo: any; 

  @Input() makeItShort: boolean;

  ngOnInit(): void {

    this.contactInfo = this.contactInfoService.get();
  }
}
