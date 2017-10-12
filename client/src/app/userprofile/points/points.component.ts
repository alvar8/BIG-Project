import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  user:object;
  constructor(private location: Location, public auth:AuthService) {
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
