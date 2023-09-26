import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { GsapService } from 'src/app/Shared/Services/gsap.service';

import { Tournaments } from './model/tournaments';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2, private gsapService : GsapService) {}

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('.item');
    elements.forEach((element: any, index: any) => {
      this.renderer.addClass(element, `item-${index}`);
    });
    this.gsapService.animateElement1();
    this.gsapService.animateElement2();
    this.gsapService.animateElement3();
    this.gsapService.animateElement4();
    this.gsapService.animateElement5();
    this.gsapService.animateElement6();
  }


  imageCSGO = '../../../assets/imagem/CardCsGo.png'
  imagePUBG = '../../../assets/imagem/CardPubg.png'
  imageFREE = '../../../assets/imagem/CardFree.png'
  imageCOD = '../../../assets/imagem/CardCod img.png'
  imageCSGO2 = '../../../assets/imagem/CardGo2.png'
  imageOVER = '../../../assets/imagem/CardOver.png'

  cards: Tournaments[] = [
    { img : this.imageCSGO, title : 'CS:GO Global gaming League', date : '10 Sept 2023/ 14:00 PM IST', playMode : '5V5',  plataform : 'PC', prize : '$500',},
    { img : this.imagePUBG, title : 'PUBG Esports Championship', date : '15 Sept 2023 / 20:00 PM IST', playMode : '1V1',  plataform : 'Mobile', prize : '$600',},
    { img : this.imageFREE, title : 'Free Fire ultimate challenge', date : '20 Sept 2023 / 22:00 AM IST', playMode : '5V5',  plataform : 'Any', prize : '$50',},
    { img : this.imageCOD, title : 'Call of Duty Mobile league', date : '21 Sept 2023 / 20:00 PM IST', playMode : '1V1',  plataform : 'Mobile', prize : '$200',},
    { img : this.imageCSGO2, title : 'CS:GO Ultimate Challenge', date : '21 Sept 2023 / 16:00 PM IST', playMode : '3V3',  plataform : 'Console', prize : '$150',},
    { img : this.imageOVER, title : 'Overwatch league tournament', date : '25 Sept 2023 / 21:00 AM IST', playMode : '5V5',  plataform : 'PC', prize : '$500',},
  ]
}
