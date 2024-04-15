import { Injectable } from '@angular/core';
import { Courses } from '../shared/model/courses';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AuthorModel } from '../shared/model/authors';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    constructor(private http: HttpClient) { }

    getAll() {
        // Add your code here
        return this.http.get(`http://localhost:4000/courses/all`);
    }

    createCourse(course: Courses) { // replace 'any' with the required interface
        // Add your code here
        return this.http.post(`http://localhost:4000/courses/add`, course);
    }

    editCourse(id: string, course: Courses): Observable<any> {
        return this.http.put(`http://localhost:4000/courses/${id}`, course)
    }

    getCourse(id: string) {
        // Add your code here
        return this.http.get(`http://localhost:4000/courses/${id}`)
    }

    deleteCourse(id: string) {
        // Add your code here
        return this.http.delete(`http://localhost:4000/courses/${id}`)
    }

    filterCourses(value: string): Observable<Courses[]> {
        // Add your code here
        return this.http.get<Courses[]>(`http://localhost:4000/courses/filter/?title=${value}`)
    }

    getAllAuthors(): Observable<AuthorModel[]> {
        // Add your code here
        return this.http.get<AuthorModel[]>(`http://localhost:4000/authors/all`)
    }

    createAuthor(name: string) {
        // Add your code here
        return this.http.post(`http://localhost:4000/authors/add`, name);
    }

    getAuthorById(id: string): Observable<AuthorModel | undefined> {
        return this.getAllAuthors().pipe(
            map(authors => authors.find(author => author.id === id))
        );
        // Add your code here
    }
}
