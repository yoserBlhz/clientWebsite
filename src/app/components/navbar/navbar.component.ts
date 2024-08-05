import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sticky: boolean = false;
  mobileMenu: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.sticky = window.scrollY > 50;
  }

  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }
}
