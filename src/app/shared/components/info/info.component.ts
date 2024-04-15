import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent {
    title = "Your List Is Empty";
    text = "Please use 'Add New Course' button to add your first course";
    courseAdd = "ADD NEW COURSE";


    constructor(private router: Router, private route: ActivatedRoute) {

    }

    addNewCourse() {
        console.log(this.route)
        this.router.navigate(['courses/add']);
    }
}
// Use the names `title` and `text`.
