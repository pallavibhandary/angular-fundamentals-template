import { Component, EventEmitter, Output } from '@angular/core';
import { mockedCoursesList } from '../../mocks/mock';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from '../../model/courses';



@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.scss']
})

export class CourseCardComponent {
    showCourse = 'SHOW COURSE';
    icons: string = "['fas', 'trash']";
    iconsEdit: string = "['fas', 'edit']";
    mockedCoursesList1: any;
    editable: Boolean = true;
    @Output() clickOnShow = new EventEmitter();

    constructor(private router: Router, private route: ActivatedRoute,) {
        this.mockedCoursesList1 = mockedCoursesList;
    }

    showCourseDetails(itemid: string) {
        //this.clickOnShow.emit(item);
        //this.router.navigate([ itemid ], { relativeTo: this.route });
        this.router.navigateByUrl('courses/' + itemid);

    }
}
