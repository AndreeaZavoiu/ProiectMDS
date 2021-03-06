import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamsComponent } from './teams/teams.component';
import { HttpClientModule } from '@angular/common/http';
import { IceBreakersComponent } from './ice-breakers/ice-breakers.component';
import { QuizComponent } from './quiz/quiz.component';
import { TreasureHuntComponent } from './treasure-hunt/treasure-hunt.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { ChangeBgDirective } from './change-bg.directive';
import { NgxWheelModule } from 'ngx-wheel';
import { RulesComponent } from './rules/rules.component';
import { ArcComponent } from './arc/arc.component';
import { RomaComponent } from './roma/roma.component';
import { FinalComponent } from './final/final.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RegisterPlayerComponent,
    TeamsComponent,
    IceBreakersComponent,
    QuizComponent,
    TreasureHuntComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,
    RulesComponent,
    ArcComponent,
    RomaComponent,
    FinalComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    BrowserAnimationsModule, 
    NgxWheelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
