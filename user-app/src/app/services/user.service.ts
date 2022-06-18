import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IUser} from '../models/user.model'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 

  }
  getAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(environment.API_URL);
  }

  createUser(user:IUser):Observable<IUser>{
    return this.http.post<IUser>(environment.API_URL,user);
  }
}


