import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { ActivatedRoute } from '@angular/router';
import {IsLoggedInService} from '../services/is-logged-in.canactivate.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user:object;
  message:[{}];
  userId:String;
  currentUser;
  userRole;
  constructor(private location: Location, public auth:AuthService, public messages:MessageService,private route: ActivatedRoute,
  public log: IsLoggedInService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );

      }

  ngOnInit() {
    this.route.params
       .subscribe((params) => this.userId = String(params['id']));

       setInterval(()=>{
    this.messages.getmessages(this.userId)
       .subscribe(message => this.message=message);
       },1000)
       this.currentUser=this.log.user
       this.userRole=this.currentUser.role
  }




  send(id,message,ref,name){
    this.messages.sendmessages(id,message,ref,name).map(user => console.log(user))
    .subscribe(result=>{
      this.messages.getmessages(this.userId)
         .subscribe(message => this.message=message)
    });

  }

  bigBrotherSend(id,message,ref,name){
    this.messages.bigBrotherSendMessages(id,message,ref,name).map(user => console.log(user))
    .subscribe(response => {
      this.messages.getmessages(this.userId)
         .subscribe(message => this.message=message)
      });

  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
