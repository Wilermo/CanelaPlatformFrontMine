import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CanelaFront';
  constructor(private readonly keycloakService: KeycloakService) {
    this.initKeycloak();
  }
  async initKeycloak(): Promise<void> {
    try {
      await this.keycloakService.init({
        config: keycloakConfig,
        initOptions: {
          onLoad: 'login-required',
        },
        bearerExcludedUrls: ['/assets'],
      });
    } catch (error) {
      console.error('Error initializing Keycloak:', error);
    }
  }
  
}
