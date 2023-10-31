import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartServiceService } from '../Services/cart-service.service';
import { User } from '../User';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent{

  user = { userName: '', email: '', password: '',firstName: '', lastName: '',mobile:'', birthdate: '',address: '',gender:''};

  constructor(private userService: UserService, private router: Router) { }

  registerUser() {
    this.userService.register(this.user).subscribe(
      response => {
        // Registration successful, redirect to login page
        this.router.navigate(['/login']);
      },
      error => {
        // Handle registration error, e.g., display an error message
        console.error('Registration error: ' + JSON.stringify(error));
      }
    );
  }

}
