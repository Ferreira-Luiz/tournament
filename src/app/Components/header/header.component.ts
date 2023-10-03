import { Component } from '@angular/core';
import { ScrollSectionService } from 'src/app/Shared/scroll-section.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private scrollSectionService: ScrollSectionService) {}

  scrollToSection(sectionId: string): void {
    this.scrollSectionService.scrollTo(sectionId);
  }

}
