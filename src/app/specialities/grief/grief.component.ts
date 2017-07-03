import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  selector: 'grief',
  templateUrl: './grief.component.html',
  styleUrls: ['./grief.component.scss']
})
export class GriefComponent implements OnInit {

  constructor(public transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}