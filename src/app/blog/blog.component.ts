import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../shared/transition.service';

@Component({
  selector: 'blog',
  template: `
    <div [class.page-transition]="transitionService.isTransitioning()">
      <h3 class="text-center">Blog coming soon...</h3>
    </div>
  `,
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(public transitionService: TransitionService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

}