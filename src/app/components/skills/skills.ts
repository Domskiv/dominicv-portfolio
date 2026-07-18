import { AfterViewInit, Component, ElementRef, inject, OnDestroy, signal } from '@angular/core';
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
export class Skills implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef);
  protected readonly litCount = signal(0);
  private observer: IntersectionObserver | null = null;
  private litInterval: ReturnType<typeof setInterval> | null = null;

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

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      this.observer?.disconnect();
      this.observer = null;
      let count = 0;
      this.litInterval = setInterval(() => {
        count++;
        this.litCount.set(count);
        if (count >= this.techSkills.length) {
          clearInterval(this.litInterval!);
          this.litInterval = null;
        }
      }, 200);
    }, { threshold: 0.2 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.litInterval) clearInterval(this.litInterval);
  }

  protected iconUrl(slug: string): string {
    return `https://cdn.simpleicons.org/${slug}`;
  }

  protected onIconError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
