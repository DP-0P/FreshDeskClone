import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private userService:UserService,private snackBar: MatSnackBar, private route: Router) { }

  ngOnInit(): void {
  }

  reload(){
    window.location.reload()
  }

  deleteUser(){
    this.snackBar.open('Account delete successfully!!!','Close',{duration:1200})
    setTimeout(()=>{
      this.route.navigate(['login'])
    },1200)
    setTimeout(()=>{
      window.location.reload()
    },1300)
    this.userService.deleteUser().subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
