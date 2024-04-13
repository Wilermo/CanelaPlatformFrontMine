import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

const keycloakConfig = {
  url: 'URL_DEL_SERVIDOR_KEYCLOAK/auth',
  realm: 'NOMBRE_DEL_REALM',
  clientId: 'ID_DEL_CLIENTE_ANGULAR',
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';
  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (this.usuario && this.contrasena) {
      // Send Credentials
      this.http.post<any>('/api/talentsoft/auth/login', { usuario: this.usuario, contrasena: this.contrasena })
        .subscribe(
          response => {
            // Manage the answer
            console.log('answer backend:', response);
          },
          error => {
            // Error
            console.error('Error sending credentials:', error);
          }
        );
    }
  }
}
