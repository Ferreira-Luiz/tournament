import { Injectable } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class GsapService {

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  private isMobile() {
    return window.innerWidth < 800;
  }

  animateFromLeft(element: HTMLElement) {
    if (!this.isMobile()) {
      gsap.from(element, {
        x: -100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: element,
          start: '-20% 70%',
          end: 'bottom 20%',
          scrub: false,
        },
      });
    }
  }

  animateFromRight(element: HTMLElement) {
    if (!this.isMobile()) {
      gsap.from(element, {
        x: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: element,
          start: '-20% 70%',
          end: 'bottom 20%',
          scrub: false,
        },
      });
    }
  }

  animateFromTop(element: HTMLElement) {
    if (!this.isMobile()) {
      gsap.from(element, {
        y: -100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: element,
          start: '-20% 70%',
          end: 'bottom 20%',
          scrub: false,
        },
      });
    }
  }

  animateFromBottom(element: HTMLElement) {
    if (!this.isMobile()) {
      gsap.from(element, {
        y: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: element,
          start: '-20% 70%',
          end: 'bottom 20%',
          scrub: false,
        },
      });
    }
  }

  animateElement1() {
    if (!this.isMobile()) {
      const elements = document.querySelectorAll('.item-0');
      elements.forEach(element => {
        gsap.from(element, {
          opacity: 0,
          y: 100,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'center center',
            scrub: false,
          }
        });
      });
    }
  }

  animateElement2() {
    if (!this.isMobile()) {
      const elements = document.querySelectorAll('.item-1');
      elements.forEach(element => {
        gsap.from(element, {
          opacity: 0,
          x: 100,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'center center',
            scrub: false
          }
        });
      });
    }
  }

  animateElement3() {
    if (!this.isMobile()) {
        const elements = document.querySelectorAll('.item-2');
        elements.forEach(element => {
          gsap.from(element, {
          opacity: 0,
          y: -100,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'center center',
            scrub: false
          }
        });
      });
    }
  }

  animateElement4() {
    if (!this.isMobile()) {
      const elements = document.querySelectorAll('.item-3');
      elements.forEach(element => {
        gsap.from(element, {
          opacity: 0,
          y: -100,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'center center',
            scrub: false
          }
        });
      });
    }
  }

  animateElement5() {
    if (!this.isMobile()) {
        const elements = document.querySelectorAll('.item-4');
        elements.forEach(element => {
        gsap.from(element, {
          opacity: 0,
          x: -100,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'center center',
            scrub: false
          }
        });
      });
    }
  }

  animateElement6() {
    if (!this.isMobile()) {
      const elements = document.querySelectorAll('.item-5');
      elements.forEach(element => {
        gsap.from(element, {
          opacity: 0,
          y: 100,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'center center',
            scrub: false
          }
        });
      });
    }
  }

}
