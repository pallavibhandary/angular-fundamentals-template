import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {

    }

    getUser(): Observable<LoginUser> {
        // Add your code here
        return this.http.get<any>(`http://localhost:4000/users/me`);
    }
}
