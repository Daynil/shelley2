import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  selector: 'other-issues',
  templateUrl: './other-issues.component.html',
  styleUrls: ['./other-issues.component.scss']
})
export class OtherIssuesComponent implements OnInit {

  constructor(public transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }
  
}