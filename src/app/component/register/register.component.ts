import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  email: string;
  user : User;
  registerMessage : string;

  constructor(private formBuilder: FormBuilder, private _authService : AuthService,
              private _router : Router, private _location: Location, private activatedRoute: ActivatedRoute,
            private userService : UserService) { }

  ngOnInit() {
//activatedRoute  -> for dynamic - value will change
// this._router.url  -> for url name

    //if (this.activatedRoute.params != null){
      this.activatedRoute.params.subscribe( param => {
      
        if (param.email != null || param.email != undefined) {
          this.userService.getUser(param.email).subscribe(response => {
            console.log(response.user)
           
            //this.registerForm = response.user;
            //console.log(this.registerForm)
          
          this.registerForm = new FormGroup({
            firstName : new FormControl(response.user.firstName),
            lastName : new FormControl(response.user.lastName),
            email : new FormControl(response.user.email),
            password : new FormControl(response.user.password),
            confirmPassword : new FormControl(response.user.confirmPassword),
              //address : new FormGroup({
               street : new FormControl(response.user.street),
               city : new FormControl(response.user.city),
               state : new FormControl(response.user.state),
               pinCode :new FormControl(response.user.pinCode)
            });
        });
        }
    
         })
   // }
    
      this.registerForm = new FormGroup({
        firstName : new FormControl(''),
        lastName : new FormControl(''),
        email : new FormControl(''),
        password : new FormControl(''),
        confirmPassword : new FormControl(''),
          //address : new FormGroup({
        street : new FormControl(''),
        city : new FormControl(''),
        state : new FormControl(''),
        pinCode :new FormControl('')
        });
     
    console.log(this.registerForm)
   
  }

  onReset(){
    this.registerForm.reset();
  }

  registerSubmit(){
    console.log(this.registerForm)
    console.log(this.registerForm.value.lastName)
    console.log(this.registerForm.value.address)
   // debugger;
   this.userService.getUser(this.registerForm.value.email).subscribe(response => {
     if (response.user != null) {
      this.registerMessage  = "User email is already exists !!";
     } else {
      this._authService.saveRegisterFormDetails(this.registerForm).subscribe(response => {
        console.log(response.userList);
       } );
     }
   });
    
  }

  getUserList() {
    //debugger;
    this._router.navigate(['/userlist']);
  }


}
