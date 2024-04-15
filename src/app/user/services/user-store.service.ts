import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class UserStoreService {
    constructor(private userService: UserService) {

    }
    private readonly name$$ = new BehaviorSubject<string>('');

    // Exposed observable (read-only).
    readonly name$ = this.name$$.asObservable();

    private readonly isAdmin$$ = new BehaviorSubject<boolean>(false);

    // Exposed observable (read-only).
    readonly isAdmin$ = this.isAdmin$$.asObservable();
    getUser() {
        // Add your code here
        const user = this.userService.getUser()
        if (user.pipe(map(user => user.role == "admin"))) {
            this.isAdmin$$.next(true)
        }
        return user;
    }

    get isAdmin() {
        // Add your code here. Get isAdmin$$ value
        return this.isAdmin$$.value
    }

    set isAdmin(value: boolean) {
        // Add your code here. Change isAdmin$$ value
        this.isAdmin$$.next(value)
    }
}
