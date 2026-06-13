import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  protected readonly closing = signal(false);

  readonly proceed = output<void>();

  protected onProceed(): void {
    if (this.closing()) {
      return;
    }
    this.closing.set(true);
    setTimeout(() => this.proceed.emit(), 650);
  }
}
