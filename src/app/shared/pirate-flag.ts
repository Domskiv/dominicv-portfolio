import { Component } from '@angular/core';

@Component({
  selector: 'app-pirate-flag',
  standalone: true,
  template: `
    <svg viewBox="0 0 100 60" class="h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <clipPath [attr.id]="'flagclip-' + uid">
          <path
            class="flag-edge"
            d="M7,8 L74,7 Q88,16 74,25 Q60,34 76,43 Q90,50 74,49 L7,49 Z"
          />
        </clipPath>
      </defs>

      <!-- pole -->
      <rect x="4" y="4" width="3" height="52" rx="1" fill="#5b3a1e" />
      <circle cx="5.5" cy="3" r="2.6" fill="#d4af37" stroke="#8a6d1a" stroke-width="0.5" />

      <!-- waving flag -->
      <g class="flag-group" [attr.clip-path]="'url(#flagclip-' + uid + ')'">
        <path
          class="flag-edge flag-bg"
          d="M7,8 L74,7 Q88,16 74,25 Q60,34 76,43 Q90,50 74,49 L7,49 Z"
          fill="#16161a"
        />

        <!-- crossbones -->
        <g fill="#f5ead2">
          <g transform="rotate(-25 36 40)">
            <rect x="20" y="38.5" width="32" height="3" rx="1.5" />
            <circle cx="20" cy="40" r="2.6" />
            <circle cx="52" cy="40" r="2.6" />
          </g>
          <g transform="rotate(25 36 40)">
            <rect x="20" y="38.5" width="32" height="3" rx="1.5" />
            <circle cx="20" cy="40" r="2.6" />
            <circle cx="52" cy="40" r="2.6" />
          </g>
        </g>

        <!-- skull -->
        <ellipse cx="36" cy="23" rx="11" ry="9" fill="#f5ead2" />
        <rect x="28" y="28" width="16" height="6" rx="2" fill="#f5ead2" />
        <g fill="#16161a">
          <ellipse cx="31.5" cy="22" rx="2.6" ry="3.4" />
          <ellipse cx="40.5" cy="22" rx="2.6" ry="3.4" />
          <path d="M36,24.5 L34.2,28 L37.8,28 Z" />
          <rect x="31" y="28" width="1.4" height="6" />
          <rect x="35.3" y="28" width="1.4" height="6" />
          <rect x="39.6" y="28" width="1.4" height="6" />
        </g>

        <!-- straw hat -->
        <ellipse cx="36" cy="13" rx="15" ry="3.4" fill="#e8b75c" stroke="#b9874a" stroke-width="0.6" />
        <ellipse cx="36" cy="11" rx="8.5" ry="4.6" fill="#f3deac" stroke="#b9874a" stroke-width="0.6" />
        <rect x="27.5" y="15" width="17" height="2.6" fill="#a8231f" />
      </g>
    </svg>
  `,
  styleUrl: './pirate-flag.css',
})
export class PirateFlag {
  protected readonly uid = Math.random().toString(36).slice(2);
}
