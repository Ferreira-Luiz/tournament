import { Component, OnInit } from '@angular/core';
import { GsapService } from 'src/app/Shared/Services/gsap.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor (private gsapService: GsapService) {}

  ngOnInit() {
    const animateFromTopFooter = document.querySelector('.animateFromTopFooter') as HTMLElement;
    const animateFromBottomFooter = document.querySelector('.animateFromBottomFooter') as HTMLElement;

    if(animateFromTopFooter) {
      this.gsapService.animateFromTop(animateFromTopFooter);
    }

    if(animateFromBottomFooter) {
      this.gsapService.animateFromBottom(animateFromBottomFooter);
    }
  }

  onSubmit(){}

}
