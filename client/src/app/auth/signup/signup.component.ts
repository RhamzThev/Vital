import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupFailed: boolean = false;

  username: string = "";
  password: string = "";
  repeatPassword: string = "";
  email: string = "";

  sex: string = "";
  age: string = "";
  weight: string = "";
  height: string = "";

  onSubmit() {
    alert(`
      username: "${this.username}",
      password: "${this.password}",
      repeatPassword: "${this.repeatPassword}",
      email: "${this.email}",
      sex: "${this.sex}",
      age: "${this.age}",
      weight: "${this.weight}",
      height: "${this.height}"
    `)
  }
}
