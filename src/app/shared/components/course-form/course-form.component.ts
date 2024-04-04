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
    authors: string[] = [];
    courseAuthors: string[] = [];
    author: string = '';
    // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.
    ngOnInit() {
        this.courseForm = new FormGroup({
            title: new FormControl('', [Validators.required, Validators.minLength(2)]),
            desciption: new FormControl('', [Validators.required, Validators.minLength(2)]),
            author: new FormControl('', Validators.required),
            authors: new FormArray([], [Validators.required]),
            courseAuthors: new FormArray([], [Validators.required]),
            duration: new FormArray([], [Validators.required])
        });
    }

    onSubmit(courseForm: FormGroup) {
        if (this.courseForm.valid) {
            console.log(this.courseForm.value);
        }
    }

    createAuthorButton(author: any) {
        const authorName = this.courseForm.value.author;
        this.authors.push(authorName)
        console.log(authorName);
        console.log(this.authors);
    }
}
