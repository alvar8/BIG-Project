import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/selfie";

@Injectable()
export class SelfieService {

  constructor(private http: Http) {

  }

  private handleError(e) {
    console.log("SELFIE ERROR");
    return Observable.throw(e.json().message);
  }

  createSelfie(ref,id,selfie){
    return this.http.post(`${BASEURL}/selfie/${id}`, {ref,id,selfie})
      .map(res => res.json())
      .catch(this.handleError);
  }
  }
