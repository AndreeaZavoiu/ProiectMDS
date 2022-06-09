import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ApiService]
})
export class RegisterComponent implements OnInit {

  constructor(private companyService: ApiService) { }

  register;

  ngOnInit() {
    this.register = {
        username : '',
        password : '',
        email : ''
    }
  }

  registerCompany() {
    this.companyService.registerCompany(this.register).subscribe( //registerCompany returneaza un observable => de aceea trb subscribe
      response => {
          alert('Company ' + this.register.username + ' has been registered!');
      }, error => console.log('error', error)
    )
  }
}
