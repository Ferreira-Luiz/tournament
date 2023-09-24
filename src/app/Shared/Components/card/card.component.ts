import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()sectionTitle!: string;
  @Input() cardData!: any[];
  @Input() linkUrl!: string;
  @Input() btnTxt!: string
}
