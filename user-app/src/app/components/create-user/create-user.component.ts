import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
// import { UserService } from ''
import {IUser} from 'src/app/models/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})


export class CreateUserComponent implements OnInit {

  users:IUser[]=[];
  userForm = new FormGroup({
    firstname : new FormControl("",[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("[a-zA-Z].*"),
      Validators.maxLength(50),
    ]),

    lastname : new FormControl("",[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("[a-zA-Z].*"),
      Validators.maxLength(50),
    ]),

    email : new FormControl("",[
      Validators.required,
      Validators.email
    ]),

    sex : new FormControl("",[
      Validators.required
    ]),

    mobile : new FormControl("",[
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(11),
      Validators.maxLength(11)
    ]),

    city : new FormControl("",[
      Validators.required
    ]),

    dob : new FormControl("",[
      Validators.required
      
    ])

  });

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next:(response)=>{
        this.users=response;
        console.log(response);
      },
      error:(error)=>{
        console.log(error);
      }
    });
  }

  
  submit(){
    console.log(this.userForm);
    // return;
    const user:IUser = {
      city:this.userForm.controls["city"].value,
      firstName:this.userForm.controls["firstname"].value,
      lastName:this.userForm.controls["lastname"].value,
      gender:this.userForm.controls["sex"].value,
      mobile:this.userForm.controls["mobile"].value,
      dob:this.userForm.controls["dob"].value,
      email:this.userForm.controls["email"].value
    }
    this.userService.createUser(user).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(error)=>{
        console.log(error);
      }
    });
    console.log(user);
  }

  get fname(){
    return this.userForm.get("firstname") as FormControl;
  }
  get lname(){
    return this.userForm.get("lastname") as FormControl;
  }
  get Email(){
    return this.userForm.get("email") as FormControl;
  }
  get Sex(){
    return this.userForm.get("sex") as FormControl;
  }
  get mob(){
    return this.userForm.get("mobile") as FormControl;
  }
  get city(){
    return this.userForm.get("city") as FormControl;
  }
  get dob(){
    
    // // console.log(this.userForm.controls["dob"].value);
    const value=this.userForm.controls["dob"].value;
    if(!value) return this.userForm.get("dob") as FormControl;

    console.log(value);

    const currDate = new Date();

    const currdateinyears = Date.parse(currDate.toDateString())/(60000*24*365*60);
    
    const prevdateinyears = Date.parse(value.toString())/(60000*24*365*60);

    if((currdateinyears-prevdateinyears) > 100 ){
      this.userForm.controls["dob"].setErrors({required:true});
      // return false;
    } 
    console.log(currdateinyears-prevdateinyears);
    console.log(this.userForm.controls["dob"]);

    return this.userForm.get("dob") as FormControl;
  }
  
}
