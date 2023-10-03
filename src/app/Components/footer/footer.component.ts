import { Component, AfterViewInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { ScrollSectionService } from 'src/app/Shared/scroll-section.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {

  private sr!: typeof ScrollReveal;

  constructor(private scrollSectionService: ScrollSectionService) {}

  scrollToSection(sectionId: string): void {
    this.scrollSectionService.scrollTo(sectionId);
  }

  ngAfterViewInit() {
    this.sr = ScrollReveal();
    this.sr.reveal('.animated-logo1', {
      origin: 'left',
      distance: '150px',
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      mobile: false,
    });

    this.sr.reveal('.animated-span1', {
      origin: 'top',
      distance: '150px',
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      mobile: false,
    });

    this.sr.reveal('.animated-logo2', {
      origin: 'top',
      distance: '150px',
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      mobile: false,
    });

    this.sr.reveal('.animated-nav', {
      origin: 'right',
      distance: '150px',
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      mobile: false,
    });

    this.sr.reveal('.animated-logo-nav', {
      origin: 'bottom',
      distance: '150px',
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      mobile: false,
    });

    this.sr.reveal('.animated-follow-us', {
      origin: 'top',
      distance: '150px',
      duration: 800,
      delay: 200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      mobile: false,
    });
  }
}
