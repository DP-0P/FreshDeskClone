import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign', component: SigninComponent },
  { path: 'dashboardTable', component: DashboardTableComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: DashboardTableComponent },
      { path: 'newTicket', component: NewTicketComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
