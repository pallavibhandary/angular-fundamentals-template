import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
    registrationForm!: FormGroup;
    login: string = 'LOGIN';
    // Use the names `name`, `email`, `password` for the form controls.


    ngOnInit() {
        this.registrationForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(6)]),
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', Validators.required)
        });
    }
    onSubmit(registrationForm: FormGroup) {
        if (this.registrationForm.valid) {
            console.log(this.registrationForm.value);
        }
    }
}
