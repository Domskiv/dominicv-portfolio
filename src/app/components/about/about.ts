import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly stats: Stat[] = [
    { value: '1+', label: 'Year of professional experience' },
    { value: '2', label: 'Production apps modernized' },
    { value: '10K+', label: 'Users on an upgraded legacy system' },
    { value: '1', label: 'Squad of the Year award' },
  ];

  protected readonly competencies: string[] = [
    'Adaptability',
    'Problem-Solving',
    'Clear Communication',
    'Cross-Team Collaboration',
    'Continuous Learning',
    'Openness to New Ideas',
    'Strong Work Ethic',
    'Self-Motivation',
  ];
}
