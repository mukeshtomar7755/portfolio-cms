import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.css'
})
export class ContactUsPageComponent {

  yourName: string = '';
  email: string = '';
  message: string = '';

  nameError: string | null = null;
  emailError: string | null = null;
  messageError: string | null = null;

  // Function to validate email format
  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  // On form submit
  onSubmit() {
    this.resetErrors(); // Clear previous error messages

    let valid = true;

    // Validate name field
    if (!this.yourName.trim()) {
      this.nameError = 'Your name is required';
      valid = false;
    }

    // Validate email field
    if (!this.email.trim()) {
      this.emailError = 'Email is required';
      valid = false;
    } else if (!this.validateEmail(this.email)) {
      this.emailError = 'Please enter a valid email address';
      valid = false;
    }

    // Validate message field
    if (!this.message.trim()) {
      this.messageError = 'Message is required';
      valid = false;
    }

    if (valid) {
      // Perform the form submission or handle the logic
      console.log('Form Data:', {
        yourName: this.yourName,
        email: this.email,
        message: this.message
      });

      // Reset form fields after successful submission
      this.resetForm();
      alert('Message Sent Successfully!');
    }
  }

  // Function to reset the form
  resetForm() {
    this.yourName = '';
    this.email = '';
    this.message = '';
  }

  // Function to reset error messages
  resetErrors() {
    this.nameError = null;
    this.emailError = null;
    this.messageError = null;
  }


}
