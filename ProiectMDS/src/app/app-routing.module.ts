import { NgModule, Query } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IceBreakersComponent } from './ice-breakers/ice-breakers.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { RegisterComponent } from './register/register.component';
import { TeamsComponent } from './teams/teams.component';
import { TreasureHuntComponent } from './treasure-hunt/treasure-hunt.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'register-player', component: RegisterPlayerComponent },
  { path : 'teams', component: TeamsComponent},
  { path : 'ice-breakers', component: IceBreakersComponent},
  { path : 'treasure-hunt', component: TreasureHuntComponent},
  { path : 'quiz', component: QuizComponent},
  { path: 'question', component: QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
