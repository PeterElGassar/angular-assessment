import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SummaryTextPipePipe } from './pipes/summary-text-pipe.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SummaryTextPipePipe,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SummaryTextPipePipe,
  ],
})
export class SharedModule {}
