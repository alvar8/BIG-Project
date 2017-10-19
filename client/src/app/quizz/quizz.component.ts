import { Component, OnInit } from '@angular/core';
import { QuizzControllerService } from '../services/quizz-controller.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  Quizz;
  user;
  quizzcounter: number= -1;
  counter: any = 0;
  formInfo = {
    answer: ""
  }
  constructor(private location: Location, public auth: AuthService,public controller: QuizzControllerService,
  private router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.controller.getQuizz().subscribe(quizz => this.Quizz = quizz);

  }

  getRandomNumber() {
    if (this.counter < 4) {
      this.counter++;
    } else {
      this.counter = 0;
    }
    if(this.quizzcounter<3){
      this.quizzcounter++
    }else{
      this.quizzcounter=-1
    }
  }

  goBack(){
    this.router.navigate(['/home'])
  }

  getPoints(user){
    const answer = this.formInfo;
    if((answer.answer).length > 1){
       answer.answer ="2"
     }
    const id=user;
    this.controller.sendPoints(id,answer)
    .map(res => console.log(res))
    .subscribe(r=> console.log(r));
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
