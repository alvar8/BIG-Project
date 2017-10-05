import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment';

const BASEURL = environment.BASEURL + "/auth";


@Injectable()
export class MessageService {
  private user: object;
  private userLoginEvent: EventEmitter<any> = new EventEmitter<any>();
  private options = { withCredentials: true };
  constructor(private http: Http) {
    //this.isLoggedIn().subscribe();
  }
  public getLoginEventEmitter(): EventEmitter<any> {
    return this.userLoginEvent;
  }

  private emitUserLoginEvent(user) {
    this.user = user;
    this.userLoginEvent.emit(user);
    return user;
  }
  private handleError(e) {
    console.log("Quizz ERROR");
    return Observable.throw(e.json().message);
  }

  sendmessages(id,message,ref){
    console.log(ref)
    return this.http.post(`${BASEURL}/messages`, {id,message,ref}, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getmessages(id){
    console.log(id)
    return this.http.get(`${BASEURL}/messages/${id}`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
