import { Component } from '@angular/core';

@Component({
  selector: 'app-going-merry',
  standalone: true,
  template: `
    <div class="going-merry-wrap relative h-full w-full">
      <svg viewBox="0 0 64 64" class="going-merry-ship h-full w-full overflow-visible" aria-hidden="true">
        <!-- hull -->
        <path d="M8,42 L56,42 L48,54 L16,54 Z" fill="#5b3a1e" />
        <path d="M8,42 L56,42 L54,46 L10,46 Z" fill="#7a4f28" />

        <!-- mast -->
        <rect x="30.5" y="8" width="1.6" height="36" fill="#5b3a1e" />

        <!-- pennant -->
        <path d="M32.1,8 L41,11 L32.1,14 Z" fill="#dc2626" />

        <!-- main sail -->
        <path d="M32,12 L50,32 L32,36 Z" fill="#f5ead2" />
        <!-- fore sail -->
        <path d="M30,18 L16,34 L30,38 Z" fill="#f5ead2" />

        <!-- ram-head figurehead at the bow -->
        <g fill="#e8b75c" stroke="#b9874a" stroke-width="0.6">
          <path d="M7.5,44 Q2.5,41.5 3.5,37 Q6.5,39.5 8.5,42.5 Z" />
          <path d="M14.5,44 Q19.5,41.5 18.5,37 Q15.5,39.5 13.5,42.5 Z" />
        </g>
        <circle cx="11" cy="46" r="4.4" fill="#f3deac" stroke="#b9874a" stroke-width="0.6" />
        <g fill="#16161a">
          <circle cx="9.4" cy="45.4" r="0.7" />
          <circle cx="12.6" cy="45.4" r="0.7" />
        </g>
      </svg>

      <!-- wake ripples trailing behind the hull -->
      <span class="going-merry-wake going-merry-wake-1" aria-hidden="true"></span>
      <span class="going-merry-wake going-merry-wake-2" aria-hidden="true"></span>
    </div>
  `,
  styleUrl: './going-merry.css',
})
export class GoingMerry {}
