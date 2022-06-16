import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private api: ApiService) { }

  players;

  ngOnInit(): void {
    this.players =  {
      id:'',
      username: '',
      company:''
    };
  }

  playerClicked = (player) => {
    this.api.getOnePlayer(player.id).subscribe();
  }
}
