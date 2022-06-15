import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ApiService]
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: ApiService) { }

  ngOnInit(): void {
  }

  logout() {
    console.log('in here!')
    this.headerService.logout().subscribe( //registerCompany returneaza un observable => de aceea trb subscribe 
    response => {
          alert('Logged out!');
      }, error => console.log('error', error)
    )
  }

}
