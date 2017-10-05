import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { ActivatedRoute } from '@angular/router';
import {IsLoggedInService} from '../services/is-logged-in.canactivate.service';

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
  constructor(public auth:AuthService, public messages:MessageService,private route: ActivatedRoute,
  public log: IsLoggedInService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );

      }

  ngOnInit() {
    this.route.params
       .subscribe((params) => this.userId = String(params['id']));
    this.messages.getmessages(this.userId)
       .subscribe(message => this.message=message);
       this.currentUser=this.log.user
       this.userRole=this.currentUser.role
  }

  send(id,message,ref,name){
    console.log(name)
    this.messages.sendmessages(id,message,ref,name).map(user => console.log(user))
    .subscribe();

  }

  bigBrotherSend(id,message,ref,name){
    console.log(ref)
    this.messages.bigBrotherSendMessages(id,message,ref,name).map(user => console.log(user))
    .subscribe();

  }

}
