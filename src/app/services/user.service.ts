import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers : new HttpHeaders({
    "content-Type" : "application/json",
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private DELETE_URL : string = "http://localhost:8080/user/deleteuser";
  private GET_URL : string = "http://localhost:8080/user/useremail";

  constructor(private _httpClient : HttpClient) { }

  public getUserList() : Observable<any>{
   return this._httpClient.get("http://localhost:8080/user/userlist");
  }

  public getUser(email: string) : Observable<any>{
    console.log("Inside service !!  " +email)
    return this._httpClient.get(this.GET_URL + "/" + email,  httpOptions);
   }

  public deleteUser(email :string) : any {
    console.log("Inside service !!  " +email)
    return this._httpClient.delete(this.DELETE_URL + "/" + email,  httpOptions);
  }

}
