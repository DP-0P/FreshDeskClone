import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { TicketService } from '../services/ticket.service';
import { ticket } from '../utilities/ticket';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket!:ticket

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
    this.ticketService.getTicketById(Cookie.get('ticketId')).subscribe(data=>{
      this.ticket = data
    })
  }

}
