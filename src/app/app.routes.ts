import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { LoginPrivetComponent } from './login-privet/login-privet.component';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { AuthGuard } from './Services/auth.guard';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
  
    {
        path: 'portfolio', component: ProjectPageComponent, title: 'Portfolio'
    },
    {
        path: 'about', component: AboutPageComponent, title: 'About'
    },
    {
        path: 'contact', component: ContactUsPageComponent, title: 'Contact'
    },
    { 
        path: 'dashboard-data', component: DashboardDataComponent, canActivate: [AuthGuard] 
    },
    {
        path: 'mukesh/login', component: LoginPrivetComponent, title: 'login'
    }, 
    {
        path: '', component: LandingPageComponent, title: 'login'
    }, 
    { 
        path: '', redirectTo: '', pathMatch: 'full' 
    },
    {
        path: '**', component: LandingPageComponent, title: 'Home'
    },

];
