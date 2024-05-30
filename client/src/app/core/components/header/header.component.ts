import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  dropdownOpen: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logOut() {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(["./auth/login"])
    })
  }

}
