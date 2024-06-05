import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, RouterLink, NgIf],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

    loginFailed: boolean = false;

    username: string = "";
    password: string = "";

    constructor(private auth: AuthService, private router: Router) { }

    onSubmit() {
        this.auth.login(this.username, this.password).subscribe({
            next: (v) => {
                this.router.navigate([""]);
            },
            error: (e) => this.loginFailed = true,
        }
        )
    }
}
