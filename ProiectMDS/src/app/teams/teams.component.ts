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
  team;
  member;
  activities: Array<any>;
  teams: Array<any>;
  allPlayers: Array<any>;

  constructor(private api: ApiService) { 
    this.getPlayers();
  }

  ngOnInit(): void {
    this.team =  {
      id: '',
      name: '',
      activity: '',
    };
    this.getActivities();

    this.getTeams();
    this.getAllPlayers();
  this.players = { 
    id: '',
    username: '' 
  };
  this.member = {
    team_id: '',
    user_id: ''
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

  // createTeam = () => {
  //   this.api.createTeam(this.teams).subscribe();
  // }
  createTeam = () => {

    // this.teams.name = name;

    // this.teams.activity = activity;

    this.api.createTeam(this.team).subscribe(

      data => {console.log(this.team.activity)},

      error => { 
        console.log(this.team.name);
        console.log(this.team.activity);
        console.log('nu merge createTeam'); }

    );

  }

  createMember = () => {
    this.api.createMember(this.member).subscribe(
      data => {console.log('aici')},
      error => {console.log(this.member.user_id)
      console.log(this.member.team_id)}
    );
  }

  chooseActivity = () => {
    this.api.chooseActivity(this.activities).subscribe();
  }
  chooseTeam = () => {
    this.api.chooseTeam(this.teams).subscribe();
  }
  choosePlayer = () => {
    this.api.choosePlayer(this.allPlayers).subscribe;
  }

  private getActivities() {

    this.api.getActivity().subscribe(

      data => {

        this.activities= data;

      }

    );

  }

  private getTeams() {
    this.api.getTeams().subscribe(
      data => {
        this.teams = data;
      }
    );
  }

  private getAllPlayers() {
    this.api.getAllPlayers().subscribe(
      data => {
        this.allPlayers = data;
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
