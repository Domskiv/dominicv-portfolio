import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface TechSkill {
  name: string;
  icon: string;  // simple-icons.org slug
}

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly techSkills: TechSkill[] = [
    { name: 'Angular',          icon: 'angular' },
    { name: 'TypeScript',       icon: 'typescript' },
    { name: 'Laravel',          icon: 'laravel' },
    { name: 'Lumen',            icon: 'php' },
    { name: 'WordPress',        icon: 'wordpress' },
    { name: 'HTML5',            icon: 'html5' },
    { name: 'CSS3',             icon: 'css3' },
    { name: 'PostgreSQL',       icon: 'postgresql' },
    { name: 'AWS',              icon: 'amazonaws' },
    { name: 'Linux',            icon: 'linux' },
    { name: 'Git',              icon: 'git' },
    { name: 'Postman',          icon: 'postman' },
    { name: 'Jira',             icon: 'jira' },
    { name: 'n8n',              icon: 'n8n' },
    { name: 'GitHub Copilot',   icon: 'github' },
    { name: 'ChatGPT',          icon: 'openai' },
    { name: 'Claude',           icon: 'anthropic' },
    { name: 'Gemini',           icon: 'googlegemini' },
    { name: 'Bash',             icon: 'gnubash' },
  ];

  protected readonly practiceSkills: string[] = [
    'Responsive Design',
    'RESTful API Design',
    'Database Design',
    'Query Optimization',
    'SQL',
    'Agile / Scrum',
    'Unit Testing',
    'Code Reviews',
    'Application Deployment',
  ];

  protected iconUrl(slug: string): string {
    return `https://cdn.simpleicons.org/${slug}`;
  }

  protected onIconError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
