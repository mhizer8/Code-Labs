import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable, map, take } from "rxjs";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.currentUser.pipe(
            take(1),
            map((user): any | undefined => {
                const isAuth = !!user;

                if (isAuth) return true;
                if (!isAuth) return this.router.createUrlTree(["auth"]);
            })
        );
    }
}