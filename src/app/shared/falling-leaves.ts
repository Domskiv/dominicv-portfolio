import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

interface Glyph {
  char: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  animClass: string;
  opacity: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ{}()/.*;:<>'.split('');
const ANIM_CLASSES = ['glyph-a', 'glyph-b', 'glyph-c', 'glyph-d'];
const SIZES = [11, 14, 18, 24, 32, 44, 56];

@Component({
  selector: 'app-falling-leaves',
  imports: [NgStyle],
  template: `
    <div class="glyphs-wrap" aria-hidden="true">
      @for (g of glyphs; track $index) {
        <span
          class="glyph"
          [class]="g.animClass"
          [ngStyle]="{
            left: g.left,
            fontSize: g.size + 'px',
            animationDuration: g.duration + 's',
            animationDelay: g.delay + 's',
            opacity: g.opacity
          }"
        >{{ g.char }}</span>
      }
    </div>
  `,
  styles: [`
    .glyphs-wrap {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
      color: #000;
      opacity: 0.06;
    }

    :host-context(.dark) .glyphs-wrap {
      color: #fff;
    }

    .glyph {
      position: absolute;
      top: -80px;
      font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
      font-weight: 300;
      line-height: 1;
      user-select: none;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    .glyph-a { animation-name: drift-a; }
    .glyph-b { animation-name: drift-b; }
    .glyph-c { animation-name: drift-c; }
    .glyph-d { animation-name: drift-d; }

    @keyframes drift-a {
      0%   { transform: translateY(0)     translateX(0px)   rotate(-2deg); opacity: 0; }
      6%   { opacity: 1; }
      35%  { transform: translateY(35vh)  translateX(18px)  rotate(2deg); }
      70%  { transform: translateY(70vh)  translateX(-12px) rotate(-3deg); }
      94%  { opacity: 0.8; }
      100% { transform: translateY(110vh) translateX(8px)   rotate(1deg);  opacity: 0; }
    }

    @keyframes drift-b {
      0%   { transform: translateY(0)     translateX(0px)   rotate(3deg);  opacity: 0; }
      6%   { opacity: 1; }
      30%  { transform: translateY(30vh)  translateX(-22px) rotate(-1deg); }
      65%  { transform: translateY(65vh)  translateX(14px)  rotate(4deg); }
      94%  { opacity: 0.8; }
      100% { transform: translateY(110vh) translateX(-6px)  rotate(-2deg); opacity: 0; }
    }

    @keyframes drift-c {
      0%   { transform: translateY(0)     translateX(0px)   rotate(0deg);  opacity: 0; }
      6%   { opacity: 1; }
      45%  { transform: translateY(45vh)  translateX(25px)  rotate(-4deg); }
      75%  { transform: translateY(75vh)  translateX(-8px)  rotate(2deg); }
      94%  { opacity: 0.8; }
      100% { transform: translateY(110vh) translateX(15px)  rotate(-1deg); opacity: 0; }
    }

    @keyframes drift-d {
      0%   { transform: translateY(0)     translateX(0px)   rotate(-4deg); opacity: 0; }
      6%   { opacity: 1; }
      40%  { transform: translateY(40vh)  translateX(-18px) rotate(3deg); }
      68%  { transform: translateY(68vh)  translateX(20px)  rotate(-2deg); }
      94%  { opacity: 0.8; }
      100% { transform: translateY(110vh) translateX(-10px) rotate(4deg);  opacity: 0; }
    }
  `],
})
export class FallingLeaves {
  protected readonly glyphs: Glyph[] = Array.from({ length: 26 }, (_, i) => ({
    char: CHARS[Math.floor(Math.random() * CHARS.length)],
    left: `${(i / 26) * 98 + Math.random() * 3}%`,
    size: SIZES[Math.floor(Math.random() * SIZES.length)],
    duration: Math.floor(Math.random() * 16) + 22,
    delay: Math.floor(Math.random() * 30) * -1,
    animClass: ANIM_CLASSES[i % 4],
    opacity: [0.25, 0.4, 0.6, 0.85, 1][Math.floor(Math.random() * 5)],
  }));
}
