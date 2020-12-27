import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.css']
})
export class AtelierComponent implements OnInit {
  
  currentAtelierId: string;

  @Input() atelier: any;
  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe( paramMap => {
      this.currentAtelierId = paramMap.get('atelierId');
    });
  }

}
