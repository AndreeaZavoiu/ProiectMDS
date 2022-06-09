import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceBreakersComponent } from './ice-breakers.component';

describe('IceBreakersComponent', () => {
  let component: IceBreakersComponent;
  let fixture: ComponentFixture<IceBreakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceBreakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IceBreakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
