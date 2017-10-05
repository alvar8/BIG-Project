import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user:object;
  constructor(public auth:AuthService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
      }

  ngOnInit() {
  }

  send(id,message){
    console.log(id)
    console.log(message)
    this.auth.send(id,message).map(user => console.log(user))
    .subscribe();

  }

}
