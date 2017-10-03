import { Component, OnInit } from '@angular/core';
import {QuizzControllerService} from '../services/quizz-controller.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  studentQuizz;
  tutorQuizz;
  constructor(public controller:QuizzControllerService) { }

  ngOnInit() {
    this.controller.getStudentQuizz().subscribe(quizz => this.studentQuizz = quizz);
    this.controller.getTutorQuizz().subscribe(quizz2 => this.tutorQuizz=quizz2);
  }

}
