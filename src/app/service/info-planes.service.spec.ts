import { TestBed } from '@angular/core/testing';

import { InfoPlanesService } from './info-planes.service';

describe('InfoPlanesService', () => {
  let service: InfoPlanesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPlanesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
