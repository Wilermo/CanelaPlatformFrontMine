import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permisos-usuario',
  templateUrl: './permisos-usuario.component.html',
  styleUrls: ['./permisos-usuario.component.css'],
})
export class PermisosUsuarioComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/']);
  }
}
