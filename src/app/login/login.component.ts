import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../utilities/User';
import { Cookie } from 'ng2-cookies';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm !: FormGroup
  constructor(private snackBar: MatSnackBar,private route: Router,private userService:UserService) {
    this.myForm = new FormGroup({
      userName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
  ngOnInit(): void {
  }
  login(form:FormGroup){
    this.userService.getUser(form.value.userName).subscribe(
      data=>{
        if(data==null)
          this.snackBar.open('User name not found!!!','Close')
        if(data.password === form.value.password){
          Cookie.set('userName',data.userName)
          this.route.navigate(['dashboard']);
        }
        else
          this.snackBar.open('Wrong Password!!! Please enter correct password!','Close')
      },
      error =>{
      }
    )
  }
}
