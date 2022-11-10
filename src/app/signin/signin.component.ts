import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../utilities/User';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  myForm !: FormGroup
  user = new User()
  
  constructor(private snackBar: MatSnackBar,private userService: UserService, private route: Router ) {
    this.myForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
      firstName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      lastName: new FormControl()
    })
  }

  ngOnInit(): void { }

  register(form:FormGroup){
    this.user.userName = form.value.userName
    this.user.firstName = form.value.firstName
    this.user.lastName = form.value.lastName
    this.user.password = form.value.password
    this.user.email = form.value.email
    this.user.phone = form.value.phone
    console.log(this.user)

    this.userService.getUser(form.value.userName).subscribe(
      data=>{
        if(data==null){
          this.userService.registration(this.user).subscribe(
            data => {
              console.log('response received')
              this.snackBar.open('Login successful!!!','Close',{duration:1200})
              setTimeout(()=>{
                this.route.navigate(['login'])
              },1200)
            },
            error =>{
              console.log('error occured') 
            }
          )
        }
        else
        this.snackBar.open('Username already taken!!! Try another one!','Close')
      }
    )  
  }
}