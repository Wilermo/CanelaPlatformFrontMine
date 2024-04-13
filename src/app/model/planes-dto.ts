export class PlanesDto {
  constructor(
    public name: string,
    public description: string,
    public duration: string,
    public numberEmployees: number,
    public bonuses: number
  ) {}
}
