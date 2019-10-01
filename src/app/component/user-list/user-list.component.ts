import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
//import { LoginComponent } from 'src/app/component/login/login.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user :any;
  userList : any[];
  constructor(private userService :  UserService, private _router : Router, private _location: Location) { }

  ngOnInit() {
    //console.log("Inside user-list component !!  " +this.loginComponent.submitted)
    // this.userService.getUserList().subscribe(response => {
    //  this.userList = response.alluserlist;
    // })

    //this.userList = this.getUserList();
    this.getUserList();
  }

  getUserList() : any  {
    this.userService.getUserList().subscribe(response => {
      console.log(response.alluserlist);
      this.userList = response.alluserlist;
     })
  }

  deleteUser(email : string){
    console.log(email)
    this.userService.deleteUser(email).subscribe(response => {
      console.log(response.deletemsg)
      if (response.deletemsg != null) {
        this.getUserList();
      }
     })
  }

  editUser(email: string){
   // this.userService.getUser(email).subscribe(response => {  })
      console.log(email)
     // this.user = response.user;
      
        this._router.navigate([`/edit`, email]);
      
    

  }

  goBack() : void{
    this._router.navigate([`register`]);
    //this._location.back();
  }
}
