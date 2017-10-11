import { Component, OnInit } from '@angular/core';
import { QuizzControllerService } from '../services/quizz-controller.service';
import { IsLoggedInService } from '../services/is-logged-in.canactivate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  Quizz;
  userRole;
  user;
  quizzcounter: number= -1;
  counter: any = 0;
  formInfo = {
    answer: ""
  }
  constructor(public controller: QuizzControllerService, public log: IsLoggedInService,
  private router: Router) { }

  ngOnInit() {
    this.controller.getQuizz().subscribe(quizz => this.Quizz = quizz);
    this.user = this.log.user
    this.userRole = this.user.role
  }

  getRandomNumber() {
    if (this.counter < 4) {
      this.counter++;
    } else {
      this.counter = 0;
    }
    if(this.quizzcounter<3){
      console.log('entro a sumar')
      this.quizzcounter++
      console.log(this.quizzcounter)
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

}
