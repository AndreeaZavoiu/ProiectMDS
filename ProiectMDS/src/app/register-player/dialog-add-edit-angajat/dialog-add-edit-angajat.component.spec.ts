import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEditAngajatComponent } from './dialog-add-edit-angajat.component';

describe('DialogAddEditAngajatComponent', () => {
  let component: DialogAddEditAngajatComponent;
  let fixture: ComponentFixture<DialogAddEditAngajatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddEditAngajatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddEditAngajatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
