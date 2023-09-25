import { Component, OnInit } from '@angular/core';
import { GsapService } from 'src/app/Shared/Services/gsap.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor (private gsapService: GsapService) {}

  ngOnInit() {
    const animateFromLeftAbout = document.querySelector('.animateFromLeftAbout') as HTMLElement;
    const animateFromRightAbout = document.querySelector('.animateFromRightAbout') as HTMLElement;
    const animateFromTopAbout = document.querySelector('.animateFromTopAbout') as HTMLElement;
    const animateFromBottomAbout = document.querySelector('.animateFromBottomAbout') as HTMLElement;

    if (animateFromLeftAbout) {
      this.gsapService.animateFromLeft(animateFromLeftAbout);
    }

    if(animateFromRightAbout) {
      this.gsapService.animateFromRight(animateFromRightAbout);
    }

    if(animateFromTopAbout) {
      this.gsapService.animateFromTop(animateFromTopAbout);
    }

    if(animateFromBottomAbout) {
      this.gsapService.animateFromBottom(animateFromBottomAbout);
    }
  }

}
