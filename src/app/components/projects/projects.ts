import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface Project {
  number: string;
  name: string;
  problem: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects: Project[] = [
    {
      number: '01',
      name: 'Project Name',
      problem: 'A short description of what this project does and what problem it solves. Replace with your real project when ready.',
      stack: ['Angular', 'Laravel', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      number: '02',
      name: 'Project Name',
      problem: 'A short description of what this project does and what problem it solves. Replace with your real project when ready.',
      stack: ['WordPress', 'PHP', 'Gutenberg'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      number: '03',
      name: 'Project Name',
      problem: 'A short description of what this project does and what problem it solves. Replace with your real project when ready.',
      stack: ['TypeScript', 'Node.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];
}
