import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ticket } from '../utilities/ticket';
import { UserService } from '../services/user.service';
import { TicketService } from '../services/ticket.service';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';
import { User } from '../utilities/User';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

  myForm !: FormGroup
  ticket = new ticket()
  oldTicket !: ticket
  old !: ticket
  

  userstate:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ticketService:TicketService,private route: Router,private userService:UserService) { 
    
    
    this.myForm = new FormGroup({
      contact: new FormControl('',Validators.required),
      subject: new FormControl('',Validators.required),
      phone: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      agent: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  update(form:FormGroup){

    this.ticket.contact = form.value.contact
    this.ticket.subject = form.value.subject
    this.ticket.phone = form.value.phone
    this.ticket.status = form.value.status
    this.ticket.userName = Cookie.get('userName')
    this.ticket.agent = form.value.agent
    this.ticket.description = form.value.description
    this.ticket.date = form.value.date
    // console.log(Cookie.get('ticketId'));
    
    this.ticket.id = Cookie.get('ticketId')
    // console.log(this.ticket,' update ticket')
    this.ticketService.updateTicket(this.ticket).subscribe(
      data => {
        console.log('response received')
        window.location.reload()
      },
      error =>{
        console.log('error occured')
        
      }
    )
  }

}
