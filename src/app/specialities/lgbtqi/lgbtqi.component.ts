import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  selector: 'lgbtqi',
  templateUrl: './lgbtqi.component.html',
  styleUrls: ['./lgbtqi.component.scss']
})
export class LgbtqiComponent implements OnInit {

  constructor(public transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}