import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-education',
  imports: [RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {}
