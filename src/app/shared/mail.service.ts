import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/toPromise";

import { handleError, parseJson, packageForPost } from './http-helpers';

@Injectable()
export class MailService {

  constructor(private http: Http) { }

  sendEmail(first: string, last: string, email: string, subject: string, body: string) {
    if (subject === '') subject = 'Footer contact';
    let mail = {
      first: first,
      last: last,
      email: email,
      subject: subject,
      body: body
    };
    let pkg = packageForPost(mail);
    return this.http
              .post('/email', pkg.body, pkg.opts)
              .toPromise()
              .then(parseJson)
              .catch(handleError);
  }

}