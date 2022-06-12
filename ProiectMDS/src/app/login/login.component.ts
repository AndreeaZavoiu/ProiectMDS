import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  myform: FormGroup;

  constructor(private companyService: AuthService) { }

  ngOnInit(): void {
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit() {
    this.companyService.login(this.myform.controls['username'].value, this.myform.controls['password'].value).pipe(first()).subscribe(
      data => {
        console.log(data);
      }
        )
  }

}
