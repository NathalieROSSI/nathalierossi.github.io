import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AteliersService } from '../ateliers.service';

@Component({
  selector: 'app-cavalier',
  templateUrl: './cavalier.component.html',
  styleUrls: ['./cavalier.component.css']
})
export class CavalierComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private ateliersService: AteliersService ) {}

  sessions: any[];

  ngOnInit(): void {

    this.sessions = this.ateliersService.getSessions();
  }

}
