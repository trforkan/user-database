import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent, 
  },
  {
    path: "create-user",
    component: CreateUserComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
