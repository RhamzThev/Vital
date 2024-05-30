import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

import { User } from "../../../../../../types/user"

const YEAR_IN_MS = 3.154e+10;
const KG_IN_LBS = 2.20462;
const IN_IN_CM = 2.54

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User | undefined;

  age: number | undefined;

  kilograms: number | undefined;
  pounds: number | undefined;

  centimeters: number | undefined;
  feet: number | undefined;
  inches: number | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLoggedInUser().subscribe({
      next: (u) => {
        if (u !== undefined) {
          this.user = u;

          if (this.user?.birthdate) {
            const year = Date.now() - new Date(this.user?.birthdate).getTime();
            this.age = Math.floor(year / YEAR_IN_MS);
          }

          if (this.user?.weight) {
            this.kilograms = parseFloat((this.user.weight).toFixed(2))
            this.pounds = parseFloat((this.user.weight * KG_IN_LBS).toFixed(2))
          }

          if (this.user?.height) {
            this.centimeters = Math.floor(this.user.height);
            const inches = this.user.height / IN_IN_CM;
            this.feet = Math.floor(inches / 12);
            this.inches = Math.floor(inches - (this.feet * 12));
          }
        }
      }
    })
  }

}
