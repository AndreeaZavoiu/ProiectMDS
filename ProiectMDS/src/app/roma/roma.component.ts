import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roma',
  templateUrl: './roma.component.html',
  styleUrls: ['./roma.component.css']
})
export class RomaComponent implements OnInit {

  @ViewChild('res') nameKey!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.nameKey.nativeElement.value === "restaurant" || this.nameKey.nativeElement.value === "Restaurant"
      || this.nameKey.nativeElement.value === "RESTAURANT") {
      this.router.navigate(['/final']);
    }
  }

}
