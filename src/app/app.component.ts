import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPrivetComponent } from './login-privet/login-privet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    LandingPageComponent,
    NgbModule,
    HeaderComponent,
    HttpClientModule,
    DashboardDataComponent,
    FormsModule,
    LoginPrivetComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myportfolio_mukesh';
  
}
