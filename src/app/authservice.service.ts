import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private isAuthenticated = false;

  constructor(private router: Router) { }

  login(username:string, password:string){
    // this.isAuthenticated = true;
    if(username === 'user' && password === 'password'){
    localStorage.setItem('authToken', 'your-jwt-token');
    this.router.navigateByUrl('/dashboard-data');
    }
  }

  logout(){
    // this.isAuthenticated = false;
    localStorage.removeItem('authToken');
  }

  isLoggedId():boolean{
    return!!localStorage.getItem('authToken');
  }






}
