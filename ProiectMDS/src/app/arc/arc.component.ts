import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arc',
  templateUrl: './arc.component.html',
  styleUrls: ['./arc.component.css']
})
export class ArcComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  url = "";

  onselectFile(e) {
    if (e.target.files) {
      var reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }

  onClick() {
      this.router.navigate(['/roma']);
  }

}
