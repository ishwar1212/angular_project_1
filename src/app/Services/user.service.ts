import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  getUserByUsername(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`);
  }


//   getUserData(username: String): Observable<any> {
//     return this.http.get(`${this.apiUrl}/${username}`);
// }

logout(): void {
  // Make an HTTP request to the logout API endpoint
  this.http.post(this.apiUrl, {}).subscribe(
    (response) => {
      // Clear user-related data on successful logout
      this.clearUserData();
    },
    (error) => {
      // Handle any errors, e.g., display an error message
      console.error('Logout error:', error);
    }
  );
}

private clearUserData(): void {
  // Perform cleanup tasks such as removing tokens and user data
  localStorage.removeItem('token');
}
  



}
