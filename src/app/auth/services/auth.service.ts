import { Injectable } from '@angular/core';
import { LoginUser } from '../../models/login.model';
import { RegisterUser } from '../../models/register.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { SessionStorageService } from './session-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public loggedUser: string = '';
    public isAuthorized$ = new Observable<boolean>;
    private isAuthorized$$ = new BehaviorSubject<boolean>(false);
    constructor(private http: HttpClient, private router: Router, private session: SessionStorageService) { }

    login(user: LoginUser): Observable<any> {
        return this.http.post('http://localhost:4000/login', user).pipe(
            tap((tokens: any) => this.doLoginUser(user.email, JSON.stringify(tokens)))
        )
    }

    doLoginUser(userName: string, token: string) {
        this.loggedUser = userName;
        this.storeJWTToken(token);
        this.isAuthorized$$.next(true);
    }
    storeJWTToken(jwt: string) {
        this.session.setToken(jwt)
        localStorage.setItem('user', this.loggedUser);
    }

    logout() {
        // Add your code here
        this.session.deleteToken()
        localStorage.removeItem('user');
        this.isAuthorized$$.next(false);
        this.router.navigate([this.getLoginUrl()]);
    }

    register(user: RegisterUser) { // replace 'any' with the required interface
        // Add your code here
        return this.http.post(`http://localhost:4000/register`, user);
    }

    get isAuthorised() {
        // Add your code here. Get isAuthorized$$ value
        return this.isAuthorized$$.value;
    }

    set isAuthorised(value: boolean) {
        // Add your code here. Change isAuthorized$$ value
        this.isAuthorized$$.next(value);
    }

    getLoginUrl() {
        // Add your code here
        this.router.navigate(['/login']);
    }
}
