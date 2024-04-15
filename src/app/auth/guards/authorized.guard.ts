import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {

    constructor(private router: Router, private authService: AuthService) { }
    canLoad(route: Route): Observable<boolean> | boolean {
        if (this.authService.isAuthorised) {
            return true;
        }
        this.router.navigate([this.authService.getLoginUrl()]);
        return false;
    }
}
