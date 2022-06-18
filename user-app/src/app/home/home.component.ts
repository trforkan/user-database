import { Component, OnInit } from '@angular/core';
import {IUser} from 'src/app/models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:IUser[]=[];
  constructor(private usersSevice:UserService) { }

  ngOnInit(): void {
    this.usersSevice.getAllUsers().subscribe({
      next:(response)=>{
        this.users=response;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

}
