import { AfterViewInit, Component, DestroyRef, inject, signal } from '@angular/core';

interface Island {
  id: string;
  label: string;
  emoji: string;
}

@Component({
  selector: 'app-scroll-sail',
  standalone: true,
  templateUrl: './scroll-sail.html',
  styleUrl: './scroll-sail.css',
})
export class ScrollSail implements AfterViewInit {
  protected readonly islands: Island[] = [
    { id: 'about', label: 'Bounty', emoji: '🏝️' },
    { id: 'experience', label: 'Voyage Log', emoji: '🏝️' },
    { id: 'skills', label: 'Devil Fruits', emoji: '🏝️' },
    { id: 'education', label: 'Training', emoji: '🏝️' },
    { id: 'contact', label: 'Crew', emoji: '🏴‍☠️' },
  ];

  /** Scroll progress through the page, 0 to 1. */
  protected readonly progress = signal(0);

  /** Each island's position along the track, 0 to 1, matching `islands`. */
  protected readonly islandPositions = signal<number[]>(this.islands.map(() => 0));

  private ticking = false;

  constructor() {
    const destroyRef = inject(DestroyRef);
    const onScroll = () => this.requestUpdate();
    const onResize = () => {
      this.measure();
      this.requestUpdate();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    });
  }

  ngAfterViewInit(): void {
    this.measure();
    this.requestUpdate();
  }

  private measure(): void {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (total <= 0) {
      return;
    }

    this.islandPositions.set(
      this.islands.map((island) => {
        const el = document.getElementById(island.id);
        if (!el) {
          return 0;
        }
        const top = el.getBoundingClientRect().top + window.scrollY;
        return Math.min(1, Math.max(0, top / total));
      }),
    );
  }

  private requestUpdate(): void {
    if (this.ticking) {
      return;
    }
    this.ticking = true;
    requestAnimationFrame(() => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      this.progress.set(total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0);
      this.ticking = false;
    });
  }
}
