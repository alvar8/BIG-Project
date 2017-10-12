import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { FileUploader} from "ng2-file-upload";
import { ActivatedRoute } from '@angular/router';
import {environment} from '../../environments/environment';

const BASEURL:string = environment.BASEURL + "/auth/edit";
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({
    url: BASEURL
  });
  userId:string;
  newUser = {
    id: '',
    username: '',
    password: '',
    alias:'',
    email: '',
    birthday:''
  };
  feedback: string;

  constructor(public auth:AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.userId = String(params['id']));
  }
  submit() {
    this.newUser.id=this.userId
  this.uploader.onBuildItemForm = (item, form) => {
    form.append('name', this.newUser.username);
    form.append('password', this.newUser.password);
    form.append('alias', this.newUser.alias);
    form.append('email', this.newUser.email);
    form.append('birthday', this.newUser.birthday);

  };
  console.log("hago subida de archivos")
  this.uploader.uploadAll();
  this.uploader.onCompleteItem=  (res) => console.log(res)
  }

}
