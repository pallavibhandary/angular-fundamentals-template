import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    // Add your code here
    constructor(
        private userStoreService: UserStoreService,
        private routerService: Router,
    ) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        // Add your code here{

        if (this.userStoreService.isAdmin) {
            return true;
        }
        this.routerService.navigate(['/courses']);
        return false;
    }
}
