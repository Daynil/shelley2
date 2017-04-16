import { Component, OnInit, ViewChild } from '@angular/core';

import { MailService } from './shared/mail.service';
import { ToastComponent } from './shared/toast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  copydate: string;
  @ViewChild('toast') toast: ToastComponent;

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.copydate = new Date().getFullYear() + '';
  }

  open(location: string) {
    window.open('https://spiercounseling.wordpress.com/');
  }

  mail(nameFirst: HTMLInputElement, nameLast: HTMLInputElement, email: HTMLInputElement, body: HTMLTextAreaElement) {
    let firstTxt = nameFirst.value;
    let lastTxt = nameLast.value;
    let emailTxt = email.value;
    let subjectTxt = 'Footer contact';
    let bodyTxt = body.value;
    let vals = [firstTxt, lastTxt, emailTxt, bodyTxt];
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