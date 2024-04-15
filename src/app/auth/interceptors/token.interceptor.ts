import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    // Add your code here
    constructor(private router: Router) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let accessToken = sessionStorage.getItem("SESSION_TOKEN");
        if (accessToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        }

        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.router.navigate(['login']);
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
