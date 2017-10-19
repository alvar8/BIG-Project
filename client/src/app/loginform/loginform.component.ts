import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

interface LoginForm{
  username:string;
  password:string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  formInfo:LoginForm = {
    username: "",
    password: ""
  };

  constructor(private location: Location, public auth:AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      this.auth.login(username, password)
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
