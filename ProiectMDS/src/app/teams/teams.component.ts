import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [ApiService]
})

export class TeamsComponent implements OnInit {
  players ;
  teams;
  activities;

  constructor(private api: ApiService) { 
    this.getPlayers();
  }

  ngOnInit(): void {
    this.teams =  {
      name: '',
      activity: Number
    };

    this.activities = {
      id:'',
      name:'',
      location:''
    };

    
  this.players = { 
    username: '' 
  };


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

  // createTeam = () => {
  //   this.api.createTeam(this.teams).subscribe();
  // }
  createTeam = () => {

    // this.teams.name = name;

    // this.teams.activity = activity;

    this.api.createTeam(this.teams).subscribe(

      data => {console.log(this.teams.activity)},

      error => { 
        console.log(this.teams.name);
        console.log(this.teams.activity);
        console.log('nu merge createTeam'); }

    );

  }

  chooseActivity = () => {
    this.api.chooseActivity(this.activities).subscribe();
  }

  getActivity = () => {

    this.api.getActivity().subscribe(

      data => {

        this.activities= data;

      }

    );

  }

  teamClicked = (team) => {

    this.api.getTeam(team.id).subscribe(

      data => { console.log('TeamClicked')} ,

      error => {

        console.log(error);

      }

    )

  }

}
