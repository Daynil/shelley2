import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../shared/transition.service';

@Component({
  selector: 'forms',
  template: `
    <div [class.page-transition]="transitionService.isTransitioning()">
      <h3 class="text-center">Forms coming soon...</h3>
    </div>
  `,
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}