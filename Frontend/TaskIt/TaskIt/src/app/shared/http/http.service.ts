import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../user.model";
import { exhaustMap, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";
import {TasklistComponent} from "./../../list/list.component"


@Injectable({
    providedIn: "root"
})

export class HTTPService {
    
    constructor( private http: HttpClient, authService: AuthService, taskListComponent:TasklistComponent){}

    firebaseRootURL = "https://taskit-e2014-default-rtdb.firebaseio.com/"


    // saveItemToFirebase() {
    //     const items = this.taskListComponent.getList();

    // }

    // fetchItemFromFirebase() {
    //     return this.authService.currentUser.pipe(
    //         take(1),
    //         exhaustMap((user) => {
    //             console.log(user);
    //             return this.http.get(this.firebaseRootURL, {
    //                 params: new HttpParams().set('auth', user.token),
    //             })
    //         .pipe(
    //         tap((users: User[]) => {
    //           this.taskListComponent.setBooks(users);
    //         })
    //       );
      
    //      }) );
        
    // }
}