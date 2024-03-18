import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'courses-app';
    header = 'LOGIN';
    headline = "Your List Is Empty";
    text = "Please use 'Add New Course' button to add your first course";
    courseAdd = "ADD NEW COURSE";
    coursesDesc: any;

    showCourse(item: any) {
        this.coursesDesc.push(item);
    }

}
