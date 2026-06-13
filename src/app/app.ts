import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { ScrollSail } from './shared/scroll-sail';
import { Welcome } from './components/welcome/welcome';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Experience, Skills, Education, Contact, ScrollSail, Welcome],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly showWelcome = signal(true);

  constructor() {
    document.body.style.overflow = 'hidden';
  }

  protected onProceed(): void {
    document.body.style.overflow = '';
    this.showWelcome.set(false);
  }
}
