import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-user-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-test.component.html',
  styleUrls: ['./user-test.component.css'],
})
export class UserTestComponent implements OnInit {
  users: User[] = []; // Array to store users

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Users fetched:', this.users);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
    });
  }
}
