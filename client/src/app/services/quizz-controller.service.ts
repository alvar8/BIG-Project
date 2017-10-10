import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL:string = environment.BASEURL + "/quizz";
const BASEURLAuth:string = environment.BASEURL + "/auth";

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

getStudentQuizz(){
  return this.http.get(`${BASEURL}/student`, this.options)
  .map(res => res.json())
  .catch(this.handleError);
}

getTutorQuizz(){
  return this.http.get(`${BASEURL}/tutor`, this.options)
  .map(res => res.json())
  .catch(this.handleError);
}

private handleError(e) {
  console.log("Quizz ERROR");
  return Observable.throw(e.json().message);
}

isLoggedIn() {
  return this.http.get(`${BASEURLAuth}/loggedin`, this.options)
    .map(res => res.json())
    .map(user => this.emitUserLoginEvent(user))
    .catch(this.handleError);
}

sendPoints(id,points){
  return this.http.post(`${BASEURL}/points`,{id,points}, this.options)
  .map(res => res.json())
  .catch(this.handleError);
}

}
