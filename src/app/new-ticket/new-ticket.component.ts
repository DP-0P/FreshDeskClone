import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tickets } from '../utilities/tickets';
import { TicketService } from '../services/ticket.service';
import { Cookie } from 'ng2-cookies';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {

  myForm !: FormGroup
  ticket = new tickets()

  constructor(private snackBar: MatSnackBar,private ticketService:TicketService,private route: Router) { 
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

  register(form:FormGroup){
    this.ticket.contact = form.value.contact
    this.ticket.subject = form.value.subject
    this.ticket.phone = form.value.phone
    this.ticket.status = form.value.status
    this.ticket.userName = Cookie.get('userName')
    this.ticket.agent = form.value.agent
    this.ticket.description = form.value.description
    this.ticket.date = form.value.date
    this.ticketService.registration(this.ticket).subscribe(
      data => {
        this.snackBar.open('New ticket raised!!!','Close',{duration:1200})
              setTimeout(()=>{
                this.route.navigate(['dashboard'])
              },1200)
      },
      error =>{
        console.log('error occured')
      }
    )
  }
}