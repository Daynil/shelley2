import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../shared/transition.service';

@Component({
  selector: 'cassie',
  templateUrl: './cassie.component.html',
  styleUrls: ['./cassie.component.scss']
})
export class CassieComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}