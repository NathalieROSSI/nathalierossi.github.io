import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierChoisiComponent } from './atelier-choisi.component';

describe('AtelierChoisiComponent', () => {
  let component: AtelierChoisiComponent;
  let fixture: ComponentFixture<AtelierChoisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierChoisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtelierChoisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
