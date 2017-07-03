import { Component, OnInit } from '@angular/core';

let fileSaver = require('file-saver');

import { TransitionService } from '../shared/transition.service';
import { MailService } from '../shared/mail.service';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(public transitionService: TransitionService,
              private mailService: MailService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

  download(fileName: string) {
    this.mailService
        .downloadDoc(fileName)
        .then((data: Blob) => {
          let saveName: string;
          console.log(fileName);
          if (fileName === 'hipaa') saveName = "HIPAA and Client's Rights";
          else saveName = "Informed Consent";
          fileSaver.saveAs(data, saveName + '.pdf');
        });
  }

}