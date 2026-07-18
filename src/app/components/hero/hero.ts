import { AfterViewInit, Component, DestroyRef, inject, signal } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const FULL_NAME = 'Dominic Alwin Velasquez';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);
  protected readonly displayName = signal(this.scrambled());

  private scrambled(): string {
    return [...FULL_NAME]
      .map(c => c === ' ' ? ' ' : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)])
      .join('');
  }

  ngAfterViewInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.displayName.set(FULL_NAME);
      return;
    }

    let iteration = 0;
    const start = () => {
      const interval = setInterval(() => {
        this.displayName.set(
          [...FULL_NAME].map((char, i) => {
            if (char === ' ') return ' ';
            if (i < Math.floor(iteration)) return char;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }).join('')
        );
        iteration += 0.7;
        if (iteration >= FULL_NAME.length) {
          this.displayName.set(FULL_NAME);
          clearInterval(interval);
        }
      }, 25);

      this.destroyRef.onDestroy(() => clearInterval(interval));
    };

    setTimeout(start, 300);
  }
}
