import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class SharedModule {}
