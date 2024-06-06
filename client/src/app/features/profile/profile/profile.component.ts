import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

import User from "@declare/user"
import { RouterLink } from '@angular/router';

const YEAR_IN_MS = 3.154e+10;
const KG_IN_LBS = 2.20462;
const IN_IN_CM = 2.54

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
    email: '',
    sex: 'male',
    birthdate: new Date(),
    weight: 0,
    height: 0
  };
  age: number = 0;
  kilograms: number = 0;
  pounds: number = 0;
  centimeters: number = 0;
  feet: number = 0;
  inches: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLoggedInUser().subscribe({
      next: (u) => {
        if (u) {
          this.user = u;

          const year = Date.now() - new Date(this.user.birthdate).getTime();
          this.age = Math.floor(year / YEAR_IN_MS);

          this.kilograms = parseFloat((this.user.weight).toFixed(2))
          this.pounds = parseFloat((this.user.weight * KG_IN_LBS).toFixed(2))

          this.centimeters = Math.floor(this.user.height);
          const inches = this.user.height / IN_IN_CM;
          this.feet = Math.floor(inches / 12);
          this.inches = Math.floor(inches - (this.feet * 12));
        }
      }
    })
  }

}
