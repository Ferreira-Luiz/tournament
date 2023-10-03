import { Component, AfterViewInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {

  private sr!: typeof ScrollReveal;

  constructor () {}

  ngAfterViewInit() {
    this.sr = ScrollReveal();
    this.sr.reveal('.h1_txt', {
      origin: 'right',
      distance: '150px',
      duration: 2000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.3,
      mobile: false,
    });

    this.sr.reveal('.btn', {
      origin: 'bottom',
      distance: '150px',
      duration: 2000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.3,
      mobile: false,
    });

    this.sr.reveal('.main_img', {
      origin: 'top',
      distance: '150px',
      duration: 2000,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.3,
      mobile: false,
    });
  }
}

