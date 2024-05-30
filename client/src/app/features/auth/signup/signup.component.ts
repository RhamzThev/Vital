import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  username: string = "";
  password: string = "";
  repeatPassword: string = "";
  email: string = "";

  sex: string = "";
  birthdate: string = "";
  weight: string = "";
  height: string = "";

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit() {
    const isoBirthdate = new Date(this.birthdate);
    this.auth.signup(this.username, this.password, this.email, this.sex, isoBirthdate, this.weight, this.height).subscribe({
      next: (v) => {
        this.router.navigate(['/']);
      }
    }
    )
  }
}
