import { Component } from '@angular/core';
import { RegistroUsuarioService } from 'src/app/service/registro-usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioPermisoDto } from 'src/app/model/usuario-permiso-dto';
import { UsuarioRegistroDto } from 'src/app/model/usuario-registro-dto';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  constructor(
    private registroUsuarioService: RegistroUsuarioService,
    private router: Router
  ) {}

  nuevoUsuario: UsuarioRegistroDto | undefined;

  guardar() {
    let primerNombre = (<HTMLInputElement>(
      document.getElementById('entradaprimerNombre')
    )).value;
    let primerApellido = (<HTMLInputElement>(
      document.getElementById('entradaprimerApellido')
    )).value;
    let correo = (<HTMLInputElement>document.getElementById('entradacorreo'))
      .value;

    if (
      primerNombre != undefined &&
      primerNombre != '' &&
      primerApellido != undefined &&
      primerApellido != '' &&
      correo != undefined &&
      correo != ''
    ) {
      this.nuevoUsuario = new UsuarioRegistroDto(
        primerNombre,
        primerApellido,
        correo
      );
      this.registroUsuarioService
        .guardarUsuario(this.nuevoUsuario)
        .subscribe((result) => {});
    } else {
    }
  }
}
