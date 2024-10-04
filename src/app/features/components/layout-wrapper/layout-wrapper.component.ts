import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-wrapper',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout-wrapper.component.html',
  styleUrl: './layout-wrapper.component.scss',
})
export class LayoutWrapperComponent {
  /**
   *
   */
  constructor() {
    console.log('layout');
  }
}
