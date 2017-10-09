import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from "ng2-file-upload";
import { AuthService } from '../services/auth.service';
import { SelfieService } from '../services/selfie.service';
import { ActivatedRoute } from '@angular/router';
import { DataemotionService } from '../services/dataemotion.service';
import {environment} from '../../environments/environment';

const BASEURL:string = environment.BASEURL + "/selfie";

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.css']
})
export class SelfieComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: BASEURL
  });
  newSelfie = {
    refToOlderBrother: '',
    refToYoungerBrother: ''
  };
  user;
  userId:String;
  selfie;
  feedback: string;
  imageUrl:String;
  personEmotion;
  mainemotion;
  urlimg='http://localhost:3000';

  constructor(public auth: AuthService, public self: SelfieService,private route: ActivatedRoute,
  private data: DataemotionService) {
    this.imageUrl= ''
   }

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

  getPersonEmotion(imageUrl:String){
    console.log(imageUrl)
    this.data.getPersonEmotion(imageUrl).subscribe(data=>
    this.personEmotion=this.getScore(data[0].scores))
  }

  getScore(objScores) {
    let scoresArr = Object.entries(objScores);
    let maxEmotion = {
      name: '',
      score: 0
    }
    for (let i = 0; i < scoresArr.length - 1; i++) {
      console.log(scoresArr[i][1])
      if (scoresArr[i][1] > maxEmotion.score) {
        maxEmotion.name = scoresArr[i][0];
        maxEmotion.score = scoresArr[i][1];
      }
    }
    return maxEmotion;
  }

}
