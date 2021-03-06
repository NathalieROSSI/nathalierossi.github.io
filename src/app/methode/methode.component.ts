import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-methode',
  templateUrl: './methode.component.html',
  styleUrls: ['./methode.component.css']
})
export class MethodeComponent implements OnInit {

  constructor( private contactInfoService : ContactInfoService ) {}
  contactInfo: any;

  @Input() makeItShort: boolean;
  
  ngOnInit(): void {

    this.contactInfo = this.contactInfoService.get();
  }
}
