import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chien-refuge',
  templateUrl: './chien-refuge.component.html',
  styleUrls: ['./chien-refuge.component.css']
})
export class ChienRefugeComponent implements OnInit {

  constructor() { }

  @Input() makeItShort: boolean;

  ngOnInit(): void {}

}
