import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/component/login/login.component';
import { RegisterComponent } from 'src/app/component/register/register.component';
import { UserListComponent } from 'src/app/component/user-list/user-list.component';
import { DashBoardComponent } from 'src/app/component/dash-board/dash-board.component';

const routes: Routes = [ 
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:`edit/:email`, component:RegisterComponent},
  {path:'userlist', component:UserListComponent},
  {path:'dashboard', component:DashBoardComponent},
  {path:'',  redirectTo:'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
