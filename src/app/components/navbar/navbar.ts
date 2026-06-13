import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected readonly theme = inject(ThemeService);
  protected readonly menuOpen = signal(false);

  protected readonly links: NavLink[] = [
    { label: 'Bounty', href: '#about' },
    { label: 'Voyage Log', href: '#experience' },
    { label: 'Devil Fruits', href: '#skills' },
    { label: 'Training', href: '#education' },
    { label: 'Crew', href: '#contact' },
  ];

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleTheme(): void {
    this.theme.toggle();
  }
}
