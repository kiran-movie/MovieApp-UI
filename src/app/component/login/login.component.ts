import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginResult : string = "";
  loginForm : FormGroup;
  submitted :  boolean = false;
  constructor(private formBuilder: FormBuilder, private _authServe : AuthService, private _router: Router) { }

  ngOnInit() {
    this.loginForm =  this.formBuilder.group({
      email : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    });
  }

  onSubmit(){
    //debugger;
   // console.log(this.loginForm.valid);
    console.log(this.loginForm.value.email);
    //this._router.navigate(['dashboard']);
  

    this._authServe.login(this.loginForm.value).subscribe(response => {
      //this.loginResult = response.message;
      if (response.message == "SUCCESS") {
        this.loginForm.reset();
        this._router.navigate(['dashboard']);
      } else {
        this.loginResult = "Invalid Username or Password  !! ";
      }
      console.log(response);
      this.submitted = true;
      // this.router.navigate[('home')];
    });
    
    
    
  }

  onReset(){
    this.submitted = false;
    this.loginForm.reset();
    console.log(this.submitted);
  }

}
