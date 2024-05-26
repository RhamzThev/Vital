import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  username: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getLoggedInUser().subscribe(
      {
        next: (user) => this.username = user.username,
        error: (error) => console.error('Error fetching user:', error)
      }
    );
  }

}
