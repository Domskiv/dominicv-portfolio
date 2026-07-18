import { Component, HostListener, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Cursor } from './shared/cursor/cursor';
import { FallingLeaves } from './shared/falling-leaves';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Projects, Experience, Skills, Education, Contact, Cursor, FallingLeaves],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly scrollProgress = signal(0);

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
  }
}
