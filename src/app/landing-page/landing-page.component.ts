import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent, RouterOutlet],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
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
}
