import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit {

  constructor( private contactInfoService : ContactInfoService ) {}
  contactInfo;

  ngOnInit(): void {
    this.contactInfo = this.contactInfoService.get();
  }

}
