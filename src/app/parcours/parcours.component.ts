import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {

  constructor() { }

  @Input() makeItShort: boolean;
  
  ngOnInit(): void {
  }

}
