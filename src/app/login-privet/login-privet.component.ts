import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-privet',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-privet.component.html',
  styleUrl: './login-privet.component.css'
})
export class LoginPrivetComponent {
  username:string = '';
  password:string = '';
  emailError:string = '';
  passwordError:string = '';

  constructor(private authService: AuthserviceService) {}

  onSubmit(){
    this.emailError = '';
    this.passwordError = '';
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(this.username)){
        this.emailError = 'Invalid email format';
        return;
      }


      if (!/[A-Z]/.test(this.password)) {
        this.passwordError = 'Password must contain at least one uppercase letter.';
      } else if (!/\d/.test(this.password)) {
        this.passwordError = 'Password must contain at least one number.';
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.password)) {
        this.passwordError = 'Password must contain at least one special character.';
      }

      if (!this.emailError && !this.passwordError) {
        console.log('Form submitted successfully');
        // Logic for successful form submission
      }
  }


  


  

}
