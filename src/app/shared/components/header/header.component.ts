import { Component, OnInit } from '@angular/core';
import { Slide } from '../../../core/models';
import { HomeService } from '../../../core/services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  slides: Slide[] = [];
  activeSlideIndex: number = 0;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getSlides().subscribe({
      next: (res) =>
        (this.slides = res.sort((a: any, b: any) => a.order - b.order)),
    });
  }

  switchSilde(index: number) {
    if (index >= 0 && index < this.slides.length) {
      this.activeSlideIndex = index;
    }
  }
}
