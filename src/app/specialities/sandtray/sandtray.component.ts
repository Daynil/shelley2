import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  selector: 'sandtray',
  templateUrl: './sandtray.component.html',
  styleUrls: ['./sandtray.component.scss']
})
export class SandtrayComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}