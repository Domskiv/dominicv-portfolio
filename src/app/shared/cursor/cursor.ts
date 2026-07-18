import { Component, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  imports: [],
  templateUrl: './cursor.html',
  styleUrl: './cursor.css',
})
export class Cursor implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private cursor!: HTMLElement;

  ngOnInit(): void {
    this.cursor = this.el.nativeElement.querySelector('.cursor-d');
    document.addEventListener('mousemove', this.onMove, { passive: true });
    document.addEventListener('mouseover', this.onOver, { passive: true });
  }

  ngOnDestroy(): void {
    document.removeEventListener('mousemove', this.onMove);
    document.removeEventListener('mouseover', this.onOver);
  }

  private readonly onMove = (e: MouseEvent): void => {
    this.cursor.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`;
  };

  private readonly onOver = (e: MouseEvent): void => {
    const isInteractive = !!(e.target as HTMLElement).closest('a,button,[role="button"]');
    this.cursor.classList.toggle('is-hover', isInteractive);
  };
}
