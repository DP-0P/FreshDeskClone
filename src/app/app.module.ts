import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    LoginComponent,
    SigninComponent,
    NewTicketComponent,
    UpdateTicketComponent,
    DashboardTableComponent,
    DeleteUserComponent,
    TicketDetailComponent
  ],
  entryComponents: [NewTicketComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
