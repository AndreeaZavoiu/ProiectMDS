import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [ApiService]
})

export class TeamsComponent implements OnInit {
  players = [{title: 'testNumePlayer'}];
  teams = [{name: 'testNumeEchipa'}];
  name = "";

  constructor(private api: ApiService) { 
    this.getPlayers();
  }

  ngOnInit(): void {
  }

  getPlayers = () => {
    this.api.getAllPlayers().subscribe(
      data => {
          this.players = data;
      },
      error => {
        console.log(error); // TODO: alert box -> https://jasonwatmore.com/post/2019/07/05/angular-8-alert-toaster-notifications
      }
    )
  }

  playerClicked = (player) => {
    this.api.getOnePlayer(player.id).subscribe(
      data => {
        
      },
      error => {
        console.log(error); // TODO: alert box -> https://jasonwatmore.com/post/2019/07/05/angular-8-alert-toaster-notifications
        // alert(`There are no players!`);
      }
    )
  }

  createTeam = (name) => {
    this.api.createTeam(name).subscribe();
  }
}
