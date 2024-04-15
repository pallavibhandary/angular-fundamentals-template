import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private routerService: Router,
    ) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        // Add your code here{

        if (this.authService.isAuthorised) {
            return true;
        }
        this.routerService.navigate(['/courses']);
        return false;
    }
}
