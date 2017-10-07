import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";
import { AuthService } from '../services/auth.service';
import { SelfieService } from '../services/selfie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.css']
})
export class SelfieComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/selfie`
  });
  newSelfie = {
    refToOlderBrother: '',
    refToYoungerBrother: ''
  };
  user;
  userId:String;
  selfie;
  feedback: string;
  constructor(public auth: AuthService, public self: SelfieService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe(user => this.user = user);
    this.route.params
         .subscribe((params) => this.userId = String(params['id']));
    this.self.getLastSelfie(this.userId).subscribe(res=>this.selfie=res)

  }
  submit(ref,id) {
    console.log(this.newSelfie)
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('refToOlderBrother', this.newSelfie.refToOlderBrother);
      form.append('refToYoungerBrother', this.newSelfie.refToYoungerBrother);
    };
    console.log("hago subida de archivos")
    this.uploader.uploadAll()
    this.uploader.onCompleteItem = (res) => this.self.updateSelfie(ref,id,res.file.name)
    .map(r => console.log(r))
    .subscribe()

  }

}
