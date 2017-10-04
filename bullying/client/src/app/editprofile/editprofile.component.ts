import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { FileUploader} from "ng2-file-upload";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/auth/edit'});

  newUser = {
    username: '',
    password: '',
    role: '',
    picture:''
  };
  feedback: string;
  userId:String;
  constructor(public auth:AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.userId = String(params['id']));

    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }
  submit() {

  this.uploader.onBuildItemForm = (item, form) => {
    form.append('name', this.newUser.username);
    form.append('password', this.newUser.password);
    form.append('role', this.newUser.role);
  };
  console.log("hago subida de archivos")
  this.uploader.uploadAll();
  this.uploader.onCompleteItem=  () => console.log("hecho")
  }
  getabro(){
    
  }
}
