import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    @ViewChild("loginForm") public loginForm!: NgForm;
    //Use the names `email` and `password` for form controls.
    email = '';
    password!: string;
    login = 'LOGIN';

    constructor() {

    }

    onSubmit(loginForm: NgForm) {
        if (loginForm && loginForm.valid) {
            const userEmail = loginForm.form.value.email;
            const password = loginForm.form.value.password;
            alert('Welcome..!!');
            console.log(userEmail, password);
        } else {
            console.log("Please enter a user email and password.");
        }
    }

}
