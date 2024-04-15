import { Injectable } from '@angular/core';
import { Courses } from '../shared/model/courses';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})



export class CoursesStoreService {

    private readonly courses$$ = new BehaviorSubject<Courses[]>([]);

    // Exposed observable (read-only).
    readonly courses$ = this.courses$$.asObservable();

    private readonly isLoading$$ = new BehaviorSubject<Boolean>(false);

    // Exposed observable (read-only).
    readonly isLoading$ = this.isLoading$$.asObservable();

    constructor() { }

    getAll(): Courses[] {
        // Add your code here
        return this.courses$$.getValue();
    }

    private _setCourses(courses: Courses[]): void {
        this.courses$$.next(courses);
    }

    createCourse(course: Courses) { // replace 'any' with the required interface
        // Add your code here
        const courses = [...this.getAll(), course];
        this._setCourses(courses);
    }

    getCourse(id: string) {
        // Add your code here
        return this.getAll().find(course => course.id == id);
    }

    editCourse(id: string, course: Courses) { // replace 'any' with the required interface
        // Add your code here
    }

    deleteCourse(id: string) {
        // Add your code here
        const courses = this.getAll().filter(p => p.id !== id);
        this._setCourses(courses);
    }

    filterCourses(value: string) {
        // Add your code here
    }

    getAllAuthors() {
        // Add your code here
    }

    createAuthor(name: string) {
        // Add your code here
    }

    getAuthorById(id: string) {
        // Add your code here
    }
}
