import { Injectable, inject } from '@angular/core';

const TOKEN = 'SESSION_TOKEN'; // Use this constant for the session storage entry key
// Add your code here

@Injectable({
    providedIn: 'root'
})
export class SessionStorageService {
    //private window = inject(Window);
    setToken(token: string) {
        // Add your code here

        sessionStorage.setItem('SESSION_TOKEN', token);
    }

    getToken() {
        // Add your code here
        sessionStorage.getItem('SESSION_TOKEN')
    }

    deleteToken() {
        // Add your code here
        sessionStorage.removeItem('SESSION_TOKEN')
    }
}
