import { Component,OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-user-test',
  imports: [CommonModule],
  templateUrl: './register-user-test.component.html',
  styleUrl: './register-user-test.component.css'
})
export class RegisterUserTestComponent{
  loggedinUser : User = new User("null","null","null","null");
  constructor(private userService : UserService){}

  registerUser(user : User): void{
    this.userService.registerUser(user).subscribe({
      next:(data)=> {
        this.loggedinUser = data;
        console.log('User added successfully');
      },
      error:(err)=>{
        console.error('Error fetching users:', err);

      }
    })
    
  }
  
}
