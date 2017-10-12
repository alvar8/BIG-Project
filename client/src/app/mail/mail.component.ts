import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
