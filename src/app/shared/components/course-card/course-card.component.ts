import { Component, EventEmitter, Output } from '@angular/core';
import { mockedCoursesList } from '../../mocks/mock';

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
    editable: Boolean = false;
    @Output() clickOnShow = new EventEmitter();

    constructor() {
        this.mockedCoursesList1 = mockedCoursesList;
    }

    showCourseDetails(item: any) {
        this.clickOnShow.emit(item);
    }
