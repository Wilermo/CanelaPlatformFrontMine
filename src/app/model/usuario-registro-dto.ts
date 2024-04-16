export class UsuarioRegistroDto {
  constructor(
    public firstname: string,
    public surname: string,
    public cedula: number,
    public email: string,
    public rol: string[]
  ) {}
}
