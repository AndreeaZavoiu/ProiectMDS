import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseurl = "http://localhost:8000"; // url-ul bazei de date din backend
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<any> {
    return this.http.get("http://localhost:8000/api/v1/teams/", 
              {headers: this.httpHeaders});
  }

  getOnePlayer(id): Observable<any> {
    return this.http.get(this.baseurl + '/teams/' + id + '/', 
              {headers: this.httpHeaders});
  }

  registerCompany(companyData): Observable<any> {
      return this.http.post("http://localhost:8000/user/users", companyData);
  }

  registerPlayer(playerData): Observable<any> {
    return this.http.post(this.baseurl + '/players/', playerData);
  }

  getQuestionJson() {
    return this.http.get<any>("assets/questions.json");
  }

  addToCart(){}

  login(email: any, password: any) {
    return this.http.post("http://localhost:8000/user/api/token/", {"username": email, password})
            // this is just the HTTP call, 
            // we still need to handle the reception of the token
            .pipe(shareReplay());
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.access); //ce reiese din Postam - access si refresh
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    
}
}
