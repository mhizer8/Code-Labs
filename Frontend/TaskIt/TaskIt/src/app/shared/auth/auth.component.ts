import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})


export class AuthComponent implements OnInit{
  isLoginMode = true;
  errMsg: string = null;
  authObserv: Observable<AuthResponseData>;
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.isLoginMode)
  }

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }  

  onAuthFormSubmit(formObj: NgForm) {
    if (!formObj.valid) return;
    const {email, password, name} = formObj.value;

    let authObserv:Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObserv = this.authService.signIn(email,password);
      
    }else{
      this.authObserv = this.authService.signUp(email,password,name);
    }

    authObserv.subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.errMsg = errorMessage
      }
    );
    formObj.reset();
  }

}