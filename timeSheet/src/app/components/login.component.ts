import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/userservice';

@Component({
    templateUrl: '../templates/login.component.html'
})
export class LoginComponent implements OnInit {
  currentUser: User;  
  constructor(private userService: UserService) { 
    
  }
  
    ngOnInit() {
     
  }
}