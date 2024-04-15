import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router) {

    }

    title = 'courses-app';
    header = 'LOGIN';
    courseAdd = "ADD NEW COURSE";
    coursesDesc: any;

    showCourse(item: any) {
        console.log(item);
        this.coursesDesc = item;
    }

    LoginPage() {
        this.router.navigate(['login'])
    }
}
