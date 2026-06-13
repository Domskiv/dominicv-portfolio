import { Component, DestroyRef, signal } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';
import { PirateFlag } from '../../shared/pirate-flag';
import { ParallaxDirective } from '../../shared/parallax.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective, PirateFlag, ParallaxDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly roles = [
    'Full-Stack Software Engineer',
    'Angular Developer',
    'Laravel & Lumen Developer',
    'AI-Augmented Builder',
  ];

  protected readonly activeRole = signal(0);

  constructor(destroyRef: DestroyRef) {
    const interval = setInterval(() => {
      this.activeRole.set((this.activeRole() + 1) % this.roles.length);
    }, 3000);

    destroyRef.onDestroy(() => clearInterval(interval));
  }
}
