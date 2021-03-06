import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    user: any = undefined;

    // user.isStaff 

    baseurl = "http://localhost:8000"; // url-ul bazei de date din backend
    httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    
    constructor(private http: HttpClient) {
        const user = localStorage.getItem('user');
        if(JSON.parse(user) != {} && user){
          this.user = JSON.parse(user);
        }
     }


    getCurrentUser(){
      return this.user;
    }
    getAllPlayers(): Observable<any> {
      return this.http.get("http://localhost:8000/user/users");
    }

    getOnePlayer(id): Observable<any> {
      return this.http.get('http://localhost:8000/user/profile' + '/' + id + '/', 
                {headers: this.httpHeaders});
    }

    registerCompany(companyData): Observable<any> {
        return this.http.post("http://localhost:8000/api/auth/register", companyData);
    }

    registerPlayer(playerData): Observable<any> {
      return this.http.post("http://localhost:8000/api/auth/register", playerData);
    }

    getQuestionJson() {
      return this.http.get<any>("assets/questions.json");
    }

    addToCart(){}

    login(email: any, password: any) {
      return this.http.post("http://localhost:8000/api/auth/login", {"username": email, password})
              .pipe(shareReplay());
    }

    setCurrentUser(user){
      this.user = user;
    }

    setSession(authResult) {
      if(authResult) {
        localStorage.setItem('token', authResult.token); //ce reiese din Postam - access si refresh
        localStorage.setItem('user', JSON.stringify(authResult.user));
        this.user = authResult.user;
      }
      else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.user = undefined;
      }
    }

    createAuthorizationHeader() {
      const token = localStorage.getItem("token");
      const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Authorization', `Token ${token}`);
      return headers;
    }

    logout() { //trebuie pus pe butonul de logout
      const token = localStorage.getItem("token");
      return this.http.post("http://localhost:8000/api/auth/logout", undefined,{
        headers: new HttpHeaders().set('Authorization', `Token ${token}`),
      })
              .pipe(shareReplay());
  }

  isAuth(){
    return this.user && Object.values(this.user).length > 0;
  }

  createTeam(teamData): Observable<any> {
    return this.http.post("http://localhost:8000/api/v1/teams/new", teamData);
  }

  createMember(memberData): Observable<any> {
    return this.http.post("http://localhost:8000/api/v1/members/new", memberData);
  }

  redirectToCheckout(sessionId: string){

  }

  chooseActivity(activity):  Observable<any> {
    return this.http.post("http://localhost:8000/api/v1/activities", activity);
  }

  getActivity():  Observable<any> {

    return this.http.get("http://localhost:8000/api/v1/activities");

  }
  chooseTeam(team): Observable<any> {
    return this.http.post("http://localhost:8000/api/v1/activities", team);
  }
  getTeams(): Observable<any> {
    return this.http.get("http://localhost:8000/api/v1/teams");
  }

  choosePlayer(player): Observable<any> {
    return this.http.post("http://localhost:8000/user/users", player);
  }
  getTeam(id): Observable<any> {

    return this.http.get('http://localhost:8000/api/v1/teams/' + '/' + id + '/',

              {headers: this.httpHeaders});

  }

}
