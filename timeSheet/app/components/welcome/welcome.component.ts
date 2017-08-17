import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: '../../templates/welcome/welcome.template.html'
})

export class WelcomeComponent implements OnInit {
    user: any = {};
  constructor(private router: Router) {}

  ngOnInit() {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      console.log("test",this.user);
  }

}