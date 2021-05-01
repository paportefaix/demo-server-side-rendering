import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapageComponent } from './mapage.component';

describe('MapageComponent', () => {
  let component: MapageComponent;
  let fixture: ComponentFixture<MapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
