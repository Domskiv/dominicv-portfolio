import { AfterViewInit, Component, DestroyRef, inject, signal } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const FULL_NAME = 'Dominic Alwin Velasquez';
const ROLES = [
  'Full-Stack Software Engineer',
  'AI-Augmented Engineer',
  'AI-Driven Engineer',
];

interface DailyQuote { text: string; author: string; }

const QUOTES: DailyQuote[] = [
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { text: 'Stay hungry, stay foolish.', author: 'Steve Jobs' },
  { text: "Your time is limited. Don't waste it living someone else's life.", author: 'Steve Jobs' },
  { text: 'Innovation distinguishes between a leader and a follower.', author: 'Steve Jobs' },
  { text: 'The best way to predict the future is to create it.', author: 'Peter Drucker' },
  { text: "It always seems impossible until it's done.", author: 'Nelson Mandela' },
  { text: 'In the middle of difficulty lies opportunity.', author: 'Albert Einstein' },
  { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein' },
  { text: 'The measure of intelligence is the ability to change.', author: 'Albert Einstein' },
  { text: 'Logic will get you from A to B. Imagination will take you everywhere.', author: 'Albert Einstein' },
  { text: 'We are what we repeatedly do. Excellence is not an act, but a habit.', author: 'Aristotle' },
  { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
  { text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
  { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
  { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  { text: 'Good code is its own best documentation.', author: 'Steve McConnell' },
  { text: 'Perfection is achieved when there is nothing left to take away.', author: 'Antoine de Saint-Exupéry' },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: 'Cory House' },
  { text: 'Simplicity is a great virtue but it requires hard work to achieve it.', author: 'Edsger Dijkstra' },
  { text: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson' },
  { text: "Whether you think you can or you can't, you're right.", author: 'Henry Ford' },
  { text: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
  { text: 'Do what you can, with what you have, where you are.', author: 'Theodore Roosevelt' },
  { text: 'Success is not final, failure is not fatal.', author: 'Winston Churchill' },
  { text: 'The journey of a thousand miles begins with one step.', author: 'Lao Tzu' },
  { text: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
  { text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
  { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
  { text: "You miss 100% of the shots you don't take.", author: 'Wayne Gretzky' },
  { text: 'The best way out is always through.', author: 'Robert Frost' },
];

function getDailyQuote(): DailyQuote {
  const phMs = Date.now() + 8 * 60 * 60 * 1000;
  const phDate = new Date(phMs);
  const startOfYear = Date.UTC(phDate.getUTCFullYear(), 0, 1);
  const dayOfYear = Math.floor((phDate.getTime() - startOfYear) / 86_400_000);
  return QUOTES[dayOfYear % QUOTES.length];
}

function msUntilPhMidnight(): number {
  const phMs = Date.now() + 8 * 60 * 60 * 1000;
  const phDate = new Date(phMs);
  const msSinceMidnight =
    (phDate.getUTCHours() * 3600 + phDate.getUTCMinutes() * 60 + phDate.getUTCSeconds()) * 1000 +
    phDate.getUTCMilliseconds();
  return 86_400_000 - msSinceMidnight;
}

@Component({
  selector: 'app-hero',
  imports: [RevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);
  protected readonly displayName = signal(this.scrambled());
  protected readonly displayRole = signal(ROLES[0]);
  protected readonly currentQuote = signal<DailyQuote>(getDailyQuote());
  protected readonly quoteVisible = signal(true);

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

    // Role scramble cycling
    let roleIndex = 0;
    let scrambleTimer: ReturnType<typeof setInterval> | null = null;

    const scrambleToRole = (target: string) => {
      if (scrambleTimer) clearInterval(scrambleTimer);
      let iter = 0;
      scrambleTimer = setInterval(() => {
        this.displayRole.set(
          [...target].map((char, i) => {
            if (char === ' ') return ' ';
            if (i < Math.floor(iter)) return char;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }).join('')
        );
        iter += 0.5;
        if (iter >= target.length) {
          this.displayRole.set(target);
          if (scrambleTimer) clearInterval(scrambleTimer);
        }
      }, 30);
    };

    const roleInterval = setInterval(() => {
      roleIndex = (roleIndex + 1) % ROLES.length;
      scrambleToRole(ROLES[roleIndex]);
    }, 3500);

    this.destroyRef.onDestroy(() => {
      clearInterval(roleInterval);
      if (scrambleTimer) clearInterval(scrambleTimer);
    });

    // Daily quote midnight refresh (PH time)
    const scheduleRefresh = () => {
      const timeout = setTimeout(() => {
        this.quoteVisible.set(false);
        setTimeout(() => {
          this.currentQuote.set(getDailyQuote());
          this.quoteVisible.set(true);
          scheduleRefresh();
        }, 600);
      }, msUntilPhMidnight());
      this.destroyRef.onDestroy(() => clearTimeout(timeout));
    };
    scheduleRefresh();
  }
}
