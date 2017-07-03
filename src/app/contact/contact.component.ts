import { Component, OnInit, ViewChild } from '@angular/core';

import { TransitionService } from '../shared/transition.service';
import { ToastComponent } from '../shared/toast.component';
import { MailService } from '../shared/mail.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('toast') toast: ToastComponent;

  constructor(public transitionService: TransitionService,
              private mailService: MailService) { }

  ngOnInit() {
    this.transitionService.transition();
  }

  open(location: string) {
    switch (location) {
      case 'arlington':
        window.open('https://www.google.com/maps/place/Northwest+Center+Against+Sexual+Assault/@42.0496401,-87.99005,17z/data=!3m1!4b1!4m5!3m4!1s0x880fb06e04836403:0x61f7c71adde871d!8m2!3d42.0496361!4d-87.9878613');
        break;
      case 'crystallake': 
        window.open('https://www.google.com/maps/place/104+Minnie+St,+Crystal+Lake,+IL+60014/@42.2440078,-88.3224935,17z/data=!3m1!4b1!4m5!3m4!1s0x880f729f60aa39cb:0x8bcbfa590bed60be!8m2!3d42.2440038!4d-88.3203048');
        break;
      case 'oakbrook':
        window.open('https://www.google.com/maps/place/900+Jorie+Blvd+%2336,+Oak+Brook,+IL+60523/@41.8441058,-87.9438097,17z/data=!3m1!4b1!4m5!3m4!1s0x880e4c72f636f1bb:0xb918fc82be14c49!8m2!3d41.8441018!4d-87.941621');
        break;
      default:
        break;
    }
  }

  mail(nameFirst: HTMLInputElement, nameLast: HTMLInputElement, email: HTMLInputElement, 
       subject: HTMLSelectElement, body: HTMLTextAreaElement) {
    let firstTxt = nameFirst.value;
    let lastTxt = nameLast.value;
    let emailTxt = email.value;
    let subjectTxt = subject.value;
    let bodyTxt = body.value;
    let vals = [firstTxt, lastTxt, emailTxt, subjectTxt, bodyTxt];
    let canSubmit = true;
    for (let i = 0; i < vals.length; i++) {
      let curVal = vals[i];
      if (curVal.length < 1) {
        this.toast.error(`Please fill out all fields!`);
        canSubmit = false;
        break;
      }
    }
    if (canSubmit) {
      this.mailService
          .sendEmail(firstTxt, lastTxt, 
                     emailTxt, subjectTxt, bodyTxt)
          .then(res => {
            if (res.message === 'sent') {
              this.toast.success('Email sent!');
              nameFirst.value = '';
              nameLast.value = '';
              email.value = '';
              body.value = '';
            }
          });
    }
  }

}