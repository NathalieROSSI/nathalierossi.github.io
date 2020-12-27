import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierDetailsComponent } from './atelier-details.component';

describe('AtelierDetailsComponent', () => {
  let component: AtelierDetailsComponent;
  let fixture: ComponentFixture<AtelierDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtelierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
