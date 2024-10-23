import { SharedModule } from './../../../../../shared/shared.module';
import { Component, Input } from '@angular/core';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { News } from '../../../../../core/models';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-news-item',
  standalone: true,
  imports: [FontAwesomeModule, SharedModule],
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.scss',
})
export class NewsItemComponent {
  @Input() artical: News = undefined!;

  thumbNail: string = 'assets/images/services/Layer 46-1.png';
  faCalendar = faCalendar;
  faHeart = faHeart;
  faShare = faShareAlt;

  onImgError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.thumbNail;
  }
}
