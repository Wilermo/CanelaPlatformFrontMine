import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    if (this.usuario && this.contrasena) {
      // Send Credentials
      this.http
        .post<any>('URL_DEL_BACKEND/login', {
          usuario: this.usuario,
          contrasena: this.contrasena,
        })
        .subscribe(
          (response) => {
            // Manage the answer
            console.log('answer backend:', response);
          },
          (error) => {
            // Error
            console.error('Error sending credentials:', error);
          }
        );
    }
  }

  login() {
    this.router.navigate(['/canela/permisos']);
  }
}
