import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChienRefugeComponent } from './chien-refuge.component';

describe('ChienRefugeComponent', () => {
  let component: ChienRefugeComponent;
  let fixture: ComponentFixture<ChienRefugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChienRefugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChienRefugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
