import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements OnInit, AfterViewInit{

  aboutDb ={
    "name":"Mukesh Tomar",
    "dob":"01-1994",
    "nationality":"India",
    "experience":"3",
    "address":"Delhi",
    "Languages":"Hindi , English",
    "Phone":"+91 7503391337",
    "Email":"3mukeshtomar@gmail.com",
    "linkedinId":"https://www.linkedin.com/in/mukesh-tomar-8074808b/",
    "Freelance":"Available"
  }


  experiences = [
    {
      date: '2017 - 2019',
      position: 'Web Designer',
      company: 'Envato',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.'
    },
    {
      date: '2014 - 2017',
      position: 'Web Developer',
      company: 'Twitter',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.'
    },
    {
      date: '2010 - 2014',
      position: 'Consultant',
      company: 'Google',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.'
    }
  ];

  education = [
    {
      date: '2007 - 2010',
      degree: 'Engineering Degree',
      institution: 'Istanbul University',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.'
    },
    {
      date: '2005 - 2007',
      degree: 'Master Degree',
      institution: 'Paris University',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.'
    },
    {
      date: '2001 - 2005',
      degree: 'Bachelor Degree',
      institution: 'Moscow High School',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.'
    }
  ];


  leftSkills = [
    { name: 'HTML', value: 90 },
    { name: 'jQuery', value: 80 },
    { name: 'Webpack', value: 70 }
  ];

  rightSkills = [
    { name: 'JavaScript', value: 75 },
    { name: 'WordPress', value: 90 },
    { name: 'Angular', value: 75 }
  ];





  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.updateProgressValues();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const typedText = this.renderer.selectRootElement(".typed-text", true) as HTMLElement | null;
      const cursor = this.renderer.selectRootElement(".cursor", true) as HTMLElement | null;

      const textArray: string[] = ["UI/UX Designer", "Web Designer", "Front-end Developer"];

      let textArrayIndex: number = 0;
      let charIndex: number = 0;

      const erase = () => {
        if (charIndex > 0) {
          cursor?.classList.remove('blink');
          if (typedText) {
            typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
          }
          charIndex--;
          setTimeout(erase, 80);
        } else {
          cursor?.classList.add('blink');
          textArrayIndex++;
          if (textArrayIndex > textArray.length - 1) {
            textArrayIndex = 0;
          }
          setTimeout(type, 500);
        }
      }

      const type = () => {
        if (charIndex <= textArray[textArrayIndex].length - 1) {
          cursor?.classList.remove('blink');
          if (typedText) {
            typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
          }
          charIndex++;
          setTimeout(type, 120);
        } else {
          cursor?.classList.add('blink');
          setTimeout(erase, 1000);
        }
      }

      type();
    }
  }


  updateProgressValues(): void {
    this.leftSkills.forEach((skill) => {
      skill.value = this.getRandomValue();
    });

    this.rightSkills.forEach((skill) => {
      skill.value = this.getRandomValue();
    });
  }

  getRandomValue(): number {
    return Math.floor(Math.random() * 101); // Random value between 0 and 100
  }
}
