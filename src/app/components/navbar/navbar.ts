import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';

interface NavLink {
  label: string;
  href: string;
  section: string;
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
  protected readonly activeSection = signal('home');
  protected readonly scrolled = signal(false);

  protected readonly links: NavLink[] = [
    { label: 'Work',       href: '#work',       section: 'work' },
    { label: 'Experience', href: '#experience', section: 'experience' },
    { label: 'Skills',     href: '#skills',     section: 'skills' },
    { label: 'Contact',    href: '#contact',    section: 'contact' },
  ];

  constructor() {
    const destroyRef = inject(DestroyRef);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.activeSection.set(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    const sections = ['home', 'work', 'experience', 'skills', 'education', 'contact'];

    const onScroll = () => this.scrolled.set(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));

    const observe = () => sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    document.readyState === 'complete' ? observe() : window.addEventListener('load', observe, { once: true });
    destroyRef.onDestroy(() => observer.disconnect());
  }

  toggleMenu(): void  { this.menuOpen.set(!this.menuOpen()); }
  closeMenu(): void   { this.menuOpen.set(false); }
  toggleTheme(): void { this.theme.toggle(); }
}
