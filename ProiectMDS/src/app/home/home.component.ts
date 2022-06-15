import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private apiService: ApiService){

  }
  
  pret: number;
  addToCart(pret: number){

  }

  redirectToCheckout(sessionId: string){
    
  }
}
