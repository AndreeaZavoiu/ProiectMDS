import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [ApiService]
})

export class TeamsComponent implements OnInit {
  players = [{title: 'Player1'}];
  teams;
  activities;

  constructor(private api: ApiService) { 
    this.getPlayers();
  }

  ngOnInit(): void {
    this.teams =  {
      id:'',
      name: '',
      location: ''
    };

    this.activities = {
      id:'',
      name:'',
      location:''
    }
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
      data => { console.log('playerClicked')} ,
      error => {
        console.log(error); // TODO: alert box -> https://jasonwatmore.com/post/2019/07/05/angular-8-alert-toaster-notifications
        // alert(`There are no players!`);
      }
    )
  }

  createTeam = () => {
    this.api.createTeam(this.teams).subscribe();
  }

  chooseActivity = () => {
    this.api.chooseActivity(this.activities).subscribe();
  }
}
