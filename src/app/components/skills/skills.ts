import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { TechIcon } from '../../shared/tech-icon';

interface SkillCategory {
  title: string;
  fruit: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [RevealDirective, TechIcon],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly categories: SkillCategory[] = [
    {
      title: 'Front End',
      fruit: 'Gomu Gomu no Mi — flexible, ever-adapting interfaces',
      skills: ['Angular', 'WordPress', 'HTML5', 'CSS3', 'Responsive Design', 'Component-Based Architecture'],
    },
    {
      title: 'Back End',
      fruit: 'Mera Mera no Mi — powering the engine room',
      skills: ['PHP (Laravel)', 'PHP (Lumen)', 'RESTful API Design & Development'],
    },
    {
      title: 'Databases',
      fruit: 'Hie Hie no Mi — keeping data perfectly structured',
      skills: ['SQL', 'PostgreSQL', 'Database Design', 'Query Optimization'],
    },
    {
      title: 'Cloud & DevOps',
      fruit: 'Goro Goro no Mi — lightning-fast deployments',
      skills: ['AWS', 'Linux', 'Bash Scripting', 'Application Deployment'],
    },
    {
      title: 'AI & Automation',
      fruit: 'Toki Toki no Mi — bending time with automation',
      skills: ['GitHub Copilot', 'n8n Workflows', 'Claude', 'GPT', 'Gemini', 'AI-Augmented Development'],
    },
    {
      title: 'Tools & Methods',
      fruit: 'Bara Bara no Mi — splitting work into manageable pieces',
      skills: ['Git', 'GitHub', 'Postman', 'Jira', 'Agile/Scrum', 'Unit Testing', 'Peer Code Reviews'],
    },
  ];
}
