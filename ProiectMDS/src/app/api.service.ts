import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  isUserLoggedIn: boolean = false;
  baseurl = "http://localhost:8000"; // url-ul bazei de date din backend
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<any> {
    return this.http.get("http://localhost:8000/user/users/", 
              {headers: this.httpHeaders});
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
    
    this.isUserLoggedIn = true;
    return this.http.post("http://localhost:8000/api/auth/login", {"username": email, password})
            .pipe(shareReplay());
  }

   setSession(authResult) {
    //const expiresAt = moment().add(3600,'second');
    localStorage.setItem('token', authResult.token); //ce reiese din Postam - access si refresh
    console.log(authResult.token);
    //localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
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
    const headers = this.createAuthorizationHeader();
    localStorage.removeItem("token");
    return this.http.post("http://localhost:8000/api/auth/logout", {}, {"headers": headers})
            .pipe(shareReplay());
}

public isLoggedIn() {
  return !!localStorage.getItem("token"); //e transf in boolean
}

isLoggedOut() {
  return !this.isLoggedIn();
}

createTeam(teamData): Observable<any> {
  return this.http.post("http://localhost:8000/api/v1/teams/new", teamData);
}

redirectToCheckout(sessionId: string){

}

chooseActivity(activity):  Observable<any> {
  return this.http.post("http://localhost:8000/api/v1/activities", activity);
}

}
