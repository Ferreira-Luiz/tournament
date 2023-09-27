import { Component, AfterViewInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {

  private sr!: typeof ScrollReveal;

  constructor () {}

  ngAfterViewInit() {
    this.sr = ScrollReveal();
    this.sr.reveal('.animated-logo1', {
      origin: 'left',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.animated-span1', {
      origin: 'top',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.animated-logo2', {
      origin: 'top',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.animated-nav', {
      origin: 'right',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.animated-logo-nav', {
      origin: 'bottom',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.animated-follow-us', {
      origin: 'top',
      distance: '150px',
      duration: 2000,
      delay: 2000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });
  }
}
