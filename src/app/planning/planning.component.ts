import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AteliersService } from '../ateliers.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private ateliersService: AteliersService ) {}

  sessions: any[];

  ngOnInit(): void {

    this.sessions = this.ateliersService.getSessions();
  }

}
