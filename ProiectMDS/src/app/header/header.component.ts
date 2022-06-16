import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ApiService]
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: ApiService,
              private router: Router) { }

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

  profil(){
    this.router.navigateByUrl('profil');
  }

}
