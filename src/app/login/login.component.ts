import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userService : UserService;
  
  constructor(userService : UserService,private router : Router){
    this.userService = userService;
  }
  loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  });
  
  found : boolean = false;

  loginUser() : void {
    this.userService.loginUser(this.loginForm.value.username ?? '', this.loginForm.value.password ?? '')
    .subscribe({
      next:(data : any)=> {
        this.found = true;
        console.log('User logged in  successfully');
        this.router.navigate(['/homepage']);
      },
      error:(err : any)=>{
        console.error('user not found with error :', err);

      }
    })
  }

}
