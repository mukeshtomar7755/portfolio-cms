import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  headerLink:any[] =[
    {
      "text":"Home",
      "routerLink":""
    },
    {
      "text":"About",
      "routerLink":"about"
    },
    {
      "text":"Portfolio",
      "routerLink":"portfolio"
    },
    // {
    //   "text":"Blog",
    //   "routerLink":""
    // }
    // ,
    {
      "text":"Contact",
      "routerLink":"contact"
    }
  ]



  dataHead: any;
  dataHeads: any;
  userService: any;
  activeLink: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(() => this.router.url !== undefined)  // Ensure URL is defined
    ).subscribe(() => {
      this.activeLink = this.router.url;
    });
  }

  isActive(link: string): boolean {
    return this.activeLink === link;
  }
  
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
}
