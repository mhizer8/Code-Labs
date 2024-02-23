import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { tap, BehaviorSubject, throwError, catchError } from 'rxjs';
import { User } from "../user.model";

const AUTH_API_KEY =    "AIzaSyB8O4L7z8GS03Als0LmTHAig2QVb5b_tBc"
const SIGN_UP_URL =     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const SIGN_IN_URL =     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: number;
    localId: string;
    registered?: boolean;
}

@Injectable({
    providedIn: "root",
})

export class AuthService implements OnInit {
    isLoginMode = false;
    currentUser = new BehaviorSubject<User>(null);
    userToken: string = null;

    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
        this.isLoginMode = false;
    }
  
    signUp(email: string, password: string, imagePath?: string) {
      return this.http
        .post<AuthResponseData>(SIGN_UP_URL + AUTH_API_KEY, {
          email,
          password,
          returnSecureToken: true
        })
        .pipe(catchError(this.handleError),
          tap(res => {
            const { email, localId, idToken, expiresIn } = res;
            this.handleAuth(email, localId, idToken, +expiresIn, imagePath);
          })
        );
    }
  
    signIn(email: string, password: string, imagePath?: string) {
      return this.http.post<AuthResponseData>(
        SIGN_IN_URL + AUTH_API_KEY, {
          email: email,
          password: password,
          returnSecureToken: true
        })
        .pipe(catchError(this.handleError),
          tap(res => {
            const { email, localId, idToken, expiresIn } = res;
            this.handleAuth(email, localId, idToken, +expiresIn, imagePath);
          })
        );
    }
  
    handleAuth(email: string, userId: string, token: string, expiresIn: number, imagePath?: string) {
      const expDate = new Date(new Date().getTime() + expiresIn * 1000);
  
      const formUser = new User( email, userId, token, expDate, imagePath);
      this.currentUser.next(formUser);
  
      localStorage.setItem("userData", JSON.stringify(formUser));
    }
  
    private handleError(errorRes: HttpErrorResponse) {
      let errorMessage = 'An unknown error occured!';
      console.log(errorRes);
      if (!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email already exists.';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email does not exist.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Invalid password';
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
            errorMessage = 'Invalid login credentials';
        }
      return throwError(errorMessage);
    }
  }
