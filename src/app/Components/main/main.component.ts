import { Component, OnInit } from '@angular/core';
import { GsapService } from 'src/app/Shared/Services/gsap.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor (private gsapService: GsapService) {}

  ngOnInit() {
    const animateFromLeftMain = document.querySelector('.animateFromLeftMain') as HTMLElement;
    const animateFromRightMain = document.querySelector('.animateFromRightMain') as HTMLElement;
    const animateFromTopMain = document.querySelector('.animateFromTopMain') as HTMLElement;
    const animateFromBottomMain = document.querySelector('.animateFromBottomMain') as HTMLElement;

    if (animateFromLeftMain) {
      this.gsapService.animateFromLeft(animateFromLeftMain);
    }

    if(animateFromRightMain) {
      this.gsapService.animateFromRight(animateFromRightMain);
    }

    if(animateFromTopMain) {
      this.gsapService.animateFromTop(animateFromTopMain);
    }

    if(animateFromBottomMain) {
      this.gsapService.animateFromBottom(animateFromBottomMain);
    }
  }
}

