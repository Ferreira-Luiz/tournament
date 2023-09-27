import { Component, AfterViewInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit {

  private sr!: typeof ScrollReveal;

  constructor () {}

  ngAfterViewInit() {
    this.sr = ScrollReveal();

    this.sr.reveal('.btn-2', {
      origin: 'right',
      distance: '150px',
      duration: 2000,
      delay: 500,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.txt', {
      origin: 'bottom',
      distance: '150px',
      duration: 2000,
      delay: 500,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.section_box', {
      origin: 'top',
      distance: '150px',
      duration: 2000,
      delay: 500,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

    this.sr.reveal('.section_img', {
      origin: 'left',
      distance: '150px',
      duration: 2000,
      delay: 500,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
    });

  }

}



