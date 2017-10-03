import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/quizz";

@Injectable()
export class QuizzControllerService {
  private user:object;
  private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
  private options = {withCredentials:true};

  constructor(private http: Http) {
  this.isLoggedIn().subscribe();
}
public getLoginEventEmitter():EventEmitter<any>{
  return this.userLoginEvent;
}

private emitUserLoginEvent(user){
  this.user = user;
  this.userLoginEvent.emit(user);
  return user;
}

getQuizzs(){
  return this.http.get(`${BASEURL}/quizzs`, this.options)
  .map(res => res.json())
  .catch(this.handleError);
}

private handleError(e) {
  console.log("Quizz ERROR");
  return Observable.throw(e.json().message);
}

isLoggedIn() {
  return this.http.get(`${BASEURL}/loggedin`, this.options)
    .map(res => res.json())
    .map(user => this.emitUserLoginEvent(user))
    .catch(this.handleError);
}
}
