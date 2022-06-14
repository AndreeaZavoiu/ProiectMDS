import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-player.component.html',
  styleUrls: ['./register-player.component.css']
})
export class RegisterPlayerComponent implements OnInit {
  constructor(private companyService: ApiService) { }

  register;

  ngOnInit() {
    this.register = {
        username : '',
        password : '',
        email : '',
        // is_staff : 'False'
    }
  }

  registerPlayer() {
    this.companyService.registerPlayer(this.register).subscribe( //registerCompany returneaza un observable => de aceea trb subscribe
      response => {
          alert('Company ' + this.register.username + ' has been registered!');
      }, error => console.log('error', error)
    )
  }
/*
  public title: string;
  public angajatForm: FormGroup = new FormGroup({
    nume: new FormControl(''),
    prenume: new FormControl(''),
    varsta: new FormControl(0)
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
//    public dialogRef: MatDialogRef<DialogAddEditAngajatComponent>,
//    private angajatiService: AngajatiService,
  ) {
    console.log(this.data);
    
      this.title = 'Sign up player';
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
//    this.dialogRef.close();
  }

  public saveData(): void {
    console.log(this.angajatForm.value);
//    this.angajatiService.createAngajat(this.angajatForm.value).subscribe(() => {
//      this.dialogRef.close(this.angajatForm.value);
//    });
  }
*/

}
