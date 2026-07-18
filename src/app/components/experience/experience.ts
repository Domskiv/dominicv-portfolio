import { Component, HostListener, signal } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  protected readonly selectedJob = signal<ExperienceItem | null>(null);

  protected readonly experience: ExperienceItem[] = [
    {
      role: 'Associate Software Engineer I',
      company: 'Cloudstaff · Remote',
      period: 'Apr 2025 – Present',
      highlights: [
        'Delivered features across two production applications built on Angular frontends and Lumen/Laravel backends, contributing across the full stack from UI components to API integrations.',
        'Led framework modernization efforts, including major version upgrades of Angular and Laravel/Lumen from legacy releases to current stable versions across two production applications.',
        'Upgraded a long-running application spanning several years of active development, and separately modernized a high-traffic legacy system serving over 10,000 users.',
        'Built and maintained RESTful APIs and end-to-end full-stack features, owning functionality from frontend flows through to backend business logic and database queries.',
        'Designed and implemented n8n-based automation workflows for API orchestration and system-to-system integrations, reducing manual integration overhead.',
        'Adopted an AI-augmented development workflow using GitHub Copilot for prompt-driven code generation, iterative refactoring, and assisted debugging.',
        'Performed cross-layer debugging across frontend, backend, and third-party integrations, including production incident resolution and root-cause analysis.',
        'Recognized as a consistent high performer — part of a team awarded Squad of the Year.',
      ],
    },
    {
      role: 'Freelance Web Developer',
      company: 'Freelance · Remote',
      period: '2024 – Present',
      highlights: [
        'Designed and built custom WordPress websites and themes for small business clients, focused on responsive, accessible layouts.',
        'Developed custom Gutenberg blocks and block patterns to give clients flexible, on-brand page-building tools within the WordPress editor.',
        'Extended themes and plugins via hooks, filters, and custom PHP to meet client-specific functionality and design requirements.',
        'Managed end-to-end client engagements, from requirements gathering through deployment and ongoing maintenance.',
        'Optimized site performance and on-page SEO basics, including caching, image optimization, and metadata.',
      ],
    },
    {
      role: 'Associate Software Engineer — Trainee',
      company: 'Cloudstaff · Remote',
      period: 'Feb 2023 – May 2023',
      highlights: [
        'Completed an intensive bootcamp covering Angular, SQL, Git, and REST API testing with Postman.',
        'Contributed to live projects using Angular for frontend development and PHP Lumen for backend services.',
        'Built REST APIs and integrated AWS S3 for file uploads and cloud storage workflows.',
        'Resolved bugs and delivered small features as part of regular Agile sprint cycles.',
        'Strengthened collaboration and problem-solving skills through daily team communication and standups.',
      ],
    },
  ];

  protected openJob(job: ExperienceItem): void {
    this.selectedJob.set(job);
    document.body.style.overflow = 'hidden';
  }

  protected closeJob(): void {
    this.selectedJob.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.selectedJob()) this.closeJob();
  }
}
