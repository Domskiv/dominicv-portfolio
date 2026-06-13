import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { ScrollSail } from './shared/scroll-sail';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Experience, Skills, Education, Contact, ScrollSail],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
