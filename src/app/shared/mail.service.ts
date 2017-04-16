import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { handleError, parseJson, packageForPost } from './http-helpers';

@Injectable()
export class MailService {

  baseUrl = environment.production ? '' : 'http://localhost:3000';

  constructor(private http: Http) { }

  sendEmail(first: string, last: string, email: string, subject: string, body: string) {
    let mail = {
      first: first,
      last: last,
      email: email,
      subject: subject,
      body: body
    };
    let pkg = packageForPost(mail);
    return this.http
              .post(this.baseUrl + '/email', pkg.body, pkg.opts)
              .toPromise()
              .then(parseJson)
              .catch(handleError);
  }

  downloadDoc(docName: string) {
    let pkg = packageForPost({docName: docName});
    return this.http
              .post(this.baseUrl + '/downloadDoc', pkg.body, pkg.opts)
              .toPromise()
              .then((res: any) => {
                let blob = new Blob([res._body], {type: 'application/msword'});
                return blob;
              })
              .catch(handleError);
  }

}