import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgxWheelComponent } from 'ngx-wheel';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treasure-hunt',
  templateUrl: './treasure-hunt.component.html',
  styleUrls: ['./treasure-hunt.component.css']
})
export class TreasureHuntComponent implements OnInit {

  @ViewChild('res') nameKey!: ElementRef;

  constructor(private api: ApiService, private router: Router) {
    this.getPlayers();
  }

  getPlayers = () => {
    this.api.getAllPlayers().subscribe(
      data => {
          this.players = data;
      },
      error => {
        console.log(error); // TODO: alert box -> https://jasonwatmore.com/post/2019/07/05/angular-8-alert-toaster-notifications
        // alert(`There are no players!`);
      }
    )
  }

  ngOnInit(): void {
  }

  players = [
    {id:1, text: 'Player1'}, {id:2, text: 'Player2'}, {id:3, text: 'Player3'}, {id:4, text: 'Player4'},{id:5, text: 'Player5'},
  ];
  
  idToLandOn = Math.floor(Math.random() * this.players.length + 1);
  
  before(){

  }

  after(){

  }

  onClick() {
    if (this.nameKey.nativeElement.value === "girafa" || this.nameKey.nativeElement.value === "Girafa"
      || this.nameKey.nativeElement.value === "GIRAFA") {
      this.router.navigate(['/paris']);
    }
  }
  
}
