import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FooterComponent implements OnInit {

  constructor( private contactInfoService : ContactInfoService ) {}
  contactInfo;

  ngOnInit(): void {
    this.contactInfo = this.contactInfoService.get();
  }

}
