import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module';
import { Category, News } from '../../../core/models';
import { HomeService } from '../../../core/services/home.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NewsItemComponent } from './components/news-item/news-item.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, CoreModule, CommonModule, NewsItemComponent],
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  newsCategories: Category[] = [];
  newsList: News[] = [];
  filteredNews: News[] = [];
  faArrowAltCircleRight = faArrowRight;
  selectedCategory: number = 0;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getCategories().subscribe({
      next: (res) => {
        this.newsCategories = res;
      },
    });

    this.homeService.getNews().subscribe({
      next: (res) => {
        this.newsList = res;
        this.filteredNews = res;
      },
    });
  }

  filterByCategory(id: number) {
    if (id === 0) {
      this.filteredNews = this.newsList;
    } else {
      let filterd = this.newsList.filter(
        (item: News) => +item.categoryID === id
      );
      this.filteredNews = [];
      this.filteredNews.push(...filterd);
    }
    this.selectedCategory = id;
  }
}
