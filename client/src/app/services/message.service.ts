import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import { environment } from '../../environments/environment';

const BASEURL:string = environment.BASEURL + "/auth";


@Injectable()
export class MessageService {
  private user: object;
  private userLoginEvent: EventEmitter<any> = new EventEmitter<any>();
  private options = { withCredentials: true };
  constructor(private http: Http) {
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
    console.log("Message ERROR");
    return Observable.throw(e.json().message);
  }

  sendmessages(id,message,ref,name){
    console.log(ref)
    return this.http.post(`${BASEURL}/messages`, {id,message,ref,name}, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  bigBrotherSendMessages(id,message,ref,name){
    console.log(ref)
    return this.http.post(`${BASEURL}/bigbrothermessages`, {id,message,ref,name}, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getmessages(id){
    console.log(id)
    return this.http.get(`${BASEURL}/messages/${id}`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getlastmessages(id){
    console.log("titi")
    return this.http.get(`${BASEURL}/last/${id}`, this.options)
    .map(res => res.json())
    .catch(this.handleError);
  }

}
