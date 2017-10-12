import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:Object;
  constructor(private location: Location,public auth:AuthService, private router:Router) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  }

  ngOnInit() {
  }

  logout(){
    this.auth.logout().subscribe(r=>this.router.navigate(['/']))
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
