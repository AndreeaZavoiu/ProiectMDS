import { NgModule, Query } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IceBreakersComponent } from './ice-breakers/ice-breakers.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { RegisterComponent } from './register/register.component';
import { RulesComponent } from './rules/rules.component';
import { TeamsComponent } from './teams/teams.component';
import { TreasureHuntComponent } from './treasure-hunt/treasure-hunt.component';
import { ArcComponent } from './arc/arc.component';
import { RomaComponent } from './roma/roma.component';
import { FinalComponent } from './final/final.component';
import {ProfilComponent} from './profil/profil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'register-player', component: RegisterPlayerComponent },
  { path : 'teams', component: TeamsComponent},
  { path : 'ice-breakers', component: IceBreakersComponent},
  { path : 'treasure-hunt', component: TreasureHuntComponent},
  { path : 'quiz', component: QuizComponent},
  { path: 'question', component: QuestionComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'final', component: FinalComponent },
  { path: 'roma', component: RomaComponent },
  { path: 'paris', component: ArcComponent },
  { path: 'profil', component: ProfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
