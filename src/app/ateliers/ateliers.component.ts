import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AteliersService } from '../ateliers.service';

@Component({
  selector: 'app-ateliers',
  templateUrl: './ateliers.component.html',
  styleUrls: ['./ateliers.component.css']
})
export class AteliersComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private ateliersService: AteliersService ) {}

  @Input() makeItShort: boolean;
  
  currentAtelierId: any;
  ateliers: { id: string; title: string; subTitle: string; format: string; price: string; comment: string; }[];

  ngOnInit(): void {
    this.ateliers = this.ateliersService.get();

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.currentAtelierId = paramMap.get('atelierId');
    });

  }

}
