import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Constant } from '../utilities/Constant';
import { tickets } from '../utilities/tickets';
import { ticket } from '../utilities/ticket'

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }

  registration(ticket: tickets): Observable<any> {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.httpClient.post<any>(`${Constant.ticketRegister}`, ticket, { 'headers': header }).pipe(retry(1), catchError(this.handleError));
  }
  handleError(err: any) {
    return throwError(() => {
      console.log(err);
    });
  }

  getTicketsDetails(): Observable<any> {
    return this.httpClient.get<any>(`${Constant.getTickets}`).pipe(retry(1), catchError(this.handleError));
  }

  deleteTicket(id: string): Observable<any> {
    return this.httpClient.delete(`${Constant.deleteTicket}` + id)
  }

  getTicketById(id:string):Observable<any>{
    return this.httpClient.get<any>(`${Constant.getTicketById}`+id).pipe(retry(1), catchError(this.handleError));
  }

  updateTicket(ticket: ticket) {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
  return this.httpClient.put<any>(`${Constant.updateTicket}` + ticket.id, ticket).pipe(retry(1), catchError(this.handleError));
  }

}
