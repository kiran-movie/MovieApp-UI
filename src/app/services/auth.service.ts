import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  result : string = "";
  SUCESS_MESSAGE : string = "Login Successfull !!"
  FAILURE_MESSAGE : string = "Invalid User !!"

  checkResult : boolean = false;
  constructor(private _httpClient:  HttpClient) { }

  login(loginForm : FormGroup) : Observable<any> {
    //Observable --> to do a sync operation

    // if (loginForm.value != null  ){
    //   console.log(loginForm)
    // }
    console.log(loginForm)
   return this._httpClient.post("http://localhost:8080/auth/login", loginForm, httpOptions);
     
    // this.checkResult = this.getLoginResult(loginForm);
    //   if (this.checkResult) {
    //     return this.SUCESS_MESSAGE;
    //   } else {
    //     return this.FAILURE_MESSAGE;
    //   }

    }
    
    getLoginResult(loginForm : FormGroup) : any {
      if (loginForm.value != null && (loginForm.value.username == "kiran" && loginForm.value.password == "1234") ){
        return this.checkResult = true;
      } 
    }

  saveRegisterFormDetails(registerForm : FormGroup) : Observable<any> {
    console.log("inside auth service !!")
    return this._httpClient.post("http://localhost:8080/auth/register", registerForm.value, httpOptions);
  }



}
