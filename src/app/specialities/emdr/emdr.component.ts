import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  selector: 'app-emdr',
  templateUrl: './emdr.component.html',
  styleUrls: ['./emdr.component.scss']
})
export class EmdrComponent implements OnInit {
  constructor(public transitionService: TransitionService) {}

  ngOnInit() {
    this.transitionService.transition();
  }
}
