import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mockedCoursesList } from '../../shared/mocks/mock';
import { Courses } from '../../shared/model/courses';
import { from } from 'rxjs';

@Component({
    selector: 'app-course-info',
    templateUrl: './course-info.component.html',
    styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {
    course: any;
    constructor(private router: Router) {

    }

    private route = inject(ActivatedRoute);


    ngOnInit(): void {
        const id = (this.route.snapshot.paramMap.get('id'));
        console.log(id)
        if (id) {
            this.course = mockedCoursesList.find(x => x.id == id)
        }


    }
    back = 'BACK';
}
