import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ticket } from '../utilities/ticket';
import { Cookie } from 'ng2-cookies/cookie';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  un !: string

  ticketDetail !: ticket[]
  constructor(private route: Router, public dialog: MatDialog,public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser(Cookie.get('userName')).subscribe(data=>{
      this.un = data.firstName
    })
  }

  logOut() {
    Cookie.deleteAll()
    this.route.navigate([''])
  }

  deleteUser() {
    this.dialog.open(DeleteUserComponent)
  }

}
