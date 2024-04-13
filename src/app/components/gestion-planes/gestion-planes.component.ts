import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanesDto } from 'src/app/model/planes-dto';
import { InfoPlanesService } from 'src/app/service/info-planes.service';

@Component({
  selector: 'app-gestion-planes',
  templateUrl: './gestion-planes.component.html',
  styleUrls: ['./gestion-planes.component.css'],
})
export class GestionPlanesComponent implements OnInit {
  constructor(
    private router: Router,
    private infoPlanesService: InfoPlanesService
  ) {}

  planes: PlanesDto[] | undefined;

  ngOnInit(): void {
    this.infoPlanesService
      .findAll()
      .subscribe((planes) => (this.planes = planes));
  }

  login() {
    this.router.navigate(['/']);
  }

  usuarios() {
    this.router.navigate(['/canela/usuarios']);
  }
}
