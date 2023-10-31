import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string='';
  user: any; // Define a variable to hold user data

  myGroup: FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
    this.myGroup = this.fb.group({

    })
  }

  getUserByUsername() {
    this.userService.getUserByUsername(this.userName).subscribe(
      (data) => {
        this.user = data;
       // this.router.navigate(['/profile'])
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }


}
