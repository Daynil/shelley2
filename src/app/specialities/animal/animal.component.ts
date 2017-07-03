import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../../shared/transition.service';

@Component({
  selector: 'animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  constructor(public transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}