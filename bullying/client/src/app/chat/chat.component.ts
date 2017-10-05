import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { ActivatedRoute } from '@angular/router';
//import {IsLoggedInService} from '../services/is-logged-in.canactivate.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user:object;
  message:[{}];
  userId:String;
  //userRole;
  constructor(public auth:AuthService, public messages:MessageService,private route: ActivatedRoute) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );

      }

  ngOnInit() {
    this.route.params
       .subscribe((params) => this.userId = String(params['id']));
    this.messages.getmessages(this.userId)
       .subscribe(message => this.message=message);
      //  this.user=this.log.user
      //  this.userRole=this.user.role
  }

  send(id,message,ref){
    console.log(ref)
    this.messages.sendmessages(id,message,ref).map(user => console.log(user))
    .subscribe();

  }

}
