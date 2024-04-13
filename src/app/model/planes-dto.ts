export class PlanesDto {
  constructor(
    public namePlan: string,
    public description: string,
    public duration: string,
    public maxNumWorker: number,
    public bonuses: number
  ) {}
}
