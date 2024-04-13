import { TestBed } from '@angular/core/testing';

import { PermisosUsuarioService } from './permisos-usuario.service';

describe('PermisosUsuarioService', () => {
  let service: PermisosUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisosUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
