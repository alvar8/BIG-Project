import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
formInfo = {
  username:"",
  password:"",
  role:""
}
  constructor(private location:Location, public auth:AuthService, private router: Router) { }

  ngOnInit() {
  }


  signup(){
    const {username, password, role} = this.formInfo;
    if(username != "" && password != ""){
      this.auth.signup(username, password, role)
      .map(user => console.log(user))
      .subscribe(r=>this.router.navigate(['/home']));
    } else{
      console.log("You must set a username and a password");
    }
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
