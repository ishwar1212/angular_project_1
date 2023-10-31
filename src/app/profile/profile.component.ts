import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: any;

  userName: string='';

  constructor(private userService: UserService, private router: Router) {}

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

  logout() {
    
  }

}
