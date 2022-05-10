import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngajatiService } from '../../../services/angajati.service';

@Component({
  selector: 'app-dialog-add-edit-angajat',
  templateUrl: './dialog-add-edit-angajat.component.html',
  styleUrls: ['./dialog-add-edit-angajat.component.css']
})
export class DialogAddEditAngajatComponent implements OnInit {

  public title: string;
  public isEditable: boolean;
  public angajatForm: FormGroup = new FormGroup({
    nume: new FormControl(''),
    prenume: new FormControl(''),
    varsta: new FormControl(0)
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogAddEditAngajatComponent>,
    private angajatiService: AngajatiService,
  ) {
    console.log(this.data);
    if (this.data.angajat) {
      this.title = 'Edit Angajat';
      this.angajatForm.patchValue(this.data.angajat);
      this.isEditable = true;
    } else {
      this.title = 'Add Angajat';
      this.isEditable = false;
    }
  }

  get nume(): AbstractControl {
    return <FormControl>this.angajatForm.get('nume');
  }
  get prenume(): AbstractControl {
    return <FormControl>this.angajatForm.get('prenume');
  }
  get varsta(): AbstractControl {
    return <FormControl>this.angajatForm.get('varsta');
  }

  ngOnInit(): void {
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public saveData(): void {
    console.log(this.angajatForm.value);
    this.angajatiService.createAngajat(this.angajatForm.value).subscribe(() => {
      this.dialogRef.close(this.angajatForm.value);
    });
  }

}
