import { Component, OnInit } from '@angular/core';

import { TransitionService } from '../shared/transition.service';
import { MailService } from '../shared/mail.service';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private transitionService: TransitionService,
              private mailService: MailService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

  download(fileName: string) {
    this.mailService
        .downloadDoc(fileName)
        .then((data: Blob) => {
          
        });
  }

}