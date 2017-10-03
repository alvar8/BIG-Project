import { Component, OnInit } from '@angular/core';
import {QuizzControllerService} from '../services/quizz-controller.service';
import {IsLoggedInService} from '../services/is-logged-in.canactivate.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  studentQuizz;
  tutorQuizz;
  randomNumber;
  userRole;
  user;
  constructor(public controller:QuizzControllerService, public log:IsLoggedInService) { }

  ngOnInit() {
    this.controller.getStudentQuizz().subscribe(quizz => this.studentQuizz = quizz);
    this.controller.getTutorQuizz().subscribe(quizz2 => this.tutorQuizz=quizz2);
    this.randomNumber=Math.round((Math.random()*1))
    this.user=this.log.user
    this.userRole=this.user.role
    console.log(this.user)
    console.log(this.userRole)
  }

  getRandomNumber(){
    this.randomNumber=Math.round((Math.random()*1))
    console.log(this.randomNumber);
  }
}
