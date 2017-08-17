import { Component,Input, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../services/alert.service';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: '../../templates/common/header.template.html'
})

export class HeaderComponent implements OnInit {
  @ViewChild('cancelReg') cancelReg : ElementRef;
  @ViewChild('cancelLog') cancelLog : ElementRef;
  
  public register = {};
  public user = {};
  private isLoggedIn: boolean = false;
  
  constructor(private userService: UserService,private router: Router, private alertService: AlertService) {}

  ngOnInit() {
  }

registerUser(){
console.log(this.register);
 this.userService.create(this.register).subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    if(data.statusCode==200){
                      this.alertService.success(data.message, true);
                      this.cancelReg.nativeElement.click();
                      this.router.navigate(['/home']);
                    }else{
                      this.alertService.error(data.message);
                    }
                },
                error => {
                    console.log("User not registerd");
                    this.alertService.error(error);
                });
}

login(){
console.log(this.user);
 this.userService.login(this.user).subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    if(data.statusCode==200){
                      this.isLoggedIn = true;
                      this.alertService.success(data.message, true);
                      this.cancelLog.nativeElement.click();
                      this.router.navigate(['/welcome']);
                    }else{
                      this.alertService.error(data.message);
                    }
                },
                error => {
                    this.alertService.error(error);
                });
}

logout(){
  localStorage.removeItem("currentUser");
  this.isLoggedIn = false;
}
}