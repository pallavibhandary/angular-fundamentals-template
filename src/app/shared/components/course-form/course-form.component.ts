import { Component, OnInit } from '@angular/core';
import {
    FormArray,
    FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Courses } from '../../model/courses';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
    constructor(public fb: FormBuilder, public library: FaIconLibrary) {
        library.addIconPacks(fas);
    }
    courseForm!: FormGroup;
    create = 'CREATE COURSE'
    createAuthor = 'CREATE AUTHOR'
    course: Courses[] = [];
    id: string = '';
    title: string = '';
    description: string = '';
    creationDate: string = '';
    duration: number = 0;
    authorsList: string[] = [];
    courseAuthorsList: string[] = [];
    author: string = '';
    count: number = 0;
    // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.
    ngOnInit() {
        this.courseForm = new FormGroup({
            title: new FormControl('', [Validators.required, Validators.minLength(2)]),
            desciption: new FormControl('', [Validators.required, Validators.minLength(2)]),
            author: new FormControl('', [Validators.required, Validators.minLength(2)]),
            authors: new FormArray([]),
            courseAuthors: new FormArray([], [Validators.required]),
            duration: new FormArray([], [Validators.required])
        });
    }

    get authors(): FormArray {
        return this.courseForm.get('authors') as FormArray;
    }

    get courseAuthors(): FormArray {
        return this.courseForm.get('courseAuthors') as FormArray;
    }

    onSubmit(courseForm: FormGroup) {
        if (!this.courseForm.valid) {
            console.log(this.courseForm.value);
        }
    }

    createAuthorButton() {
        const authorName = this.courseForm.value.author;
        this.authorsList.push(authorName);
        this.authors.push(new FormControl(authorName));
    }

    addToCourseList(name: any) {
        this.courseAuthorsList.push(name);
        this.courseAuthors.push(new FormControl(name));
        const authorIndex = this.authors.controls.findIndex(x => x.value == name);
        this.authors.removeAt(authorIndex);
        this.authorsList.splice(authorIndex, 1);

    }

    deleteAuthorsFromCourseList(author: string) {
        const authorIndex = this.courseAuthors.controls.findIndex(x => x.value == author);
        this.courseAuthorsList.splice(authorIndex, 1);
        this.courseAuthors.removeAt(authorIndex);
        this.authorsList.push(author);
        this.authors.push(new FormControl(author));
    }

    deleteAuthorsFromAuthorList(author: any) {
        const authorIndex = this.authors.controls.findIndex(x => x.value == author);
        this.authorsList.splice(authorIndex, 1);
        this.authors.removeAt(authorIndex);
    }
}
