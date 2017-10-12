import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IsLoggedInService } from '../services/is-logged-in.canactivate.service';
import { MessageService } from '../services/message.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user:object;
  currentuser;
  userId;
  pendingmessage=false;
  constructor(private location: Location, public auth:AuthService, public log:IsLoggedInService, public message: MessageService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  }

  ngOnInit() {
    this.currentuser = this.log.user
    this.userId = this.currentuser._id
    this.message.getlastmessages(this.userId).subscribe( m =>
    { if(m.refToWriter!==this.userId){
      this.pendingmessage=true;
    }else{
        this.pendingmessage=false;
      }
    })

  }

  getabro(id){
    console.log(id)
    this.auth.getbro(id).map(user => console.log(user))
    .subscribe();
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
