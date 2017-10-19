import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';

import {AuthService} from './auth.service';


const timeout = (nS) => new Promise((resolve) => setTimeout(resolve,nS * 1000));

@Injectable()
export class IsLoggedInService implements CanActivate {
  user;
  constructor(private auth:AuthService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.user=this.auth.getUser()
    return this.user ? true : false
  }


}
