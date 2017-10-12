import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { FileUploader} from "ng2-file-upload";
import { ActivatedRoute } from '@angular/router';
import {environment} from '../../environments/environment';

const BASEURL:string = environment.BASEURL + "/auth";
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({
    url: BASEURL
  });

  newUser = {
    username: '',
    password: '',
    alias:'',
    email: '',
    birthday:''
  };
  feedback: string;
  userId:String;
  constructor(public auth:AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.userId = String(params['id']));
  }
  submit() {

  this.uploader.onBuildItemForm = (item, form) => {
    form.append('name', this.newUser.username);
    form.append('password', this.newUser.password);
    form.append('alias', this.newUser.alias);
    form.append('email', this.newUser.email);
    form.append('birthday', this.newUser.birthday);

  };
  console.log("hago subida de archivos")
  this.uploader.uploadAll();
  this.uploader.onCompleteItem=  (res) => this.auth.updateUser(this.userId,this.newUser.username,this.newUser.password,
    this.newUser.alias,this.newUser.email,this.newUser.birthday,res.file.name)
  .map(r => console.log(r))
  .subscribe()
  }

}
