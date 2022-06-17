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
  user:any;
  userName:string;
  constructor(private headerService: ApiService,
              private router: Router,
              public apiService: ApiService,
              ) { 


              }

  ngOnInit(): void {
    this.user = this.headerService.getCurrentUser();
    this.userName = this.user && Object.values(this.user).length > 0 ? this.user.username : 'stranger!';
  }

  logout() {

    this.headerService.logout().subscribe( //registerCompany returneaza un observable => de aceea trb subscribe 
    response => {
          alert('Logged out!');
          this.headerService.setSession(response);
      }, error => console.log('error', error)
    )
  }

  profil(){
    this.router.navigateByUrl('profil');
  }

}
