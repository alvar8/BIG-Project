import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.css']
})
export class BrotherComponent implements OnInit {
  user:Object;
  constructor(private location:Location, private auth:AuthService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  }

  ngOnInit() {
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
