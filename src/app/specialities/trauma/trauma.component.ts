import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  selector: 'trauma',
  templateUrl: './trauma.component.html',
  styleUrls: ['./trauma.component.scss']
})
export class TraumaComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}