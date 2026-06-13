import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/**
 * Shifts the host element vertically as the page scrolls, at a fraction of
 * scroll speed given by `appParallax`. Used to give the hero's ocean layers
 * a sense of depth (distant layers move less, near layers move more).
 */
@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);

  readonly appParallax = input(0.1);

  private observer?: IntersectionObserver;
  private inView = false;
  private ticking = false;

  ngOnInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      this.inView = entries[0]?.isIntersecting ?? false;
      if (this.inView) {
        this.requestUpdate();
      }
    });
    this.observer.observe(this.el.nativeElement);

    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    window.removeEventListener('scroll', this.onScroll);
  }

  private onScroll = (): void => {
    if (this.inView) {
      this.requestUpdate();
    }
  };

  private requestUpdate(): void {
    if (this.ticking) {
      return;
    }
    this.ticking = true;
    requestAnimationFrame(() => {
      const offset = window.scrollY * this.appParallax();
      this.el.nativeElement.style.transform = `translate3d(0, ${offset}px, 0)`;
      this.ticking = false;
    });
  }
}
