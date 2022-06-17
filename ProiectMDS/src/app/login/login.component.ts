import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiService]
})
  export class LoginComponent implements OnInit{
    
    form:FormGroup;
 

    constructor(private fb:FormBuilder, 
                 private authService: ApiService, 
                 private router: Router) {

        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });
    }

    public user: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    login() {
        const val = this.form.value;

        if (val.email && val.password) {
            this.authService.login(val.email, val.password)
                .subscribe(
                    (res) => {
                        console.log(res);
                        console.log("User is logged in");
                        this.authService.setSession(res);
                        this.router.navigateByUrl('/');
                    },
                    (err) =>  {
                      console.log("Ups! That's embarassing");
                      alert("Ups, wrong credentials!");
                      console.log(err);
                    }
                );
        }
    }
    
   
}
