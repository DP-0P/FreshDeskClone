import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TicketService } from '../services/ticket.service';
import { ticket } from '../utilities/ticket';
import { Cookie } from 'ng2-cookies/cookie';
import { UpdateTicketComponent } from '../update-ticket/update-ticket.component';
import { TicketDetailComponent } from '../ticket-detail/ticket-detail.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements OnInit {

  ticketDetail !: ticket[]
  un !: string

  userstate: any;
  constructor(private snackBar: MatSnackBar,public ticketService:TicketService,private route: Router, public dialog: MatDialog) {
    this.userstate = this.route.getCurrentNavigation()?.extras.state;
    
  }

  ngOnInit(): void {
    this.un = Cookie.get('userName')
    this.getTicketDetails()
  }

  getTicketDetails(){
    this.ticketService.getTicketsDetails().subscribe(
      data=>{
        this.ticketDetail = data
          console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
  }

  delete(id:string){
    this.ticketService.deleteTicket(id).subscribe(
      data=>{
        console.log(data);
        this.snackBar.open('New ticket raised!!!','Close',{duration:1100})
        window.location.reload()
      },
      error=>{
        console.log(error);
      }
    )
  }

  update(id:string){
    Cookie.set('ticketId',id)
    this.dialog.open(UpdateTicketComponent);
  }

  details(id:string){
    Cookie.set('ticketId',id)
    this.dialog.open(TicketDetailComponent)
  }

}
