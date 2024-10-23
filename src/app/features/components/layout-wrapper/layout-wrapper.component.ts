import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';
import { HomeService } from '../../../core/services/home.service';

@Component({
  selector: 'app-layout-wrapper',
  standalone: true,
  imports: [RouterModule, SharedModule, CoreModule],

  providers: [HomeService],
  templateUrl: './layout-wrapper.component.html',
  styleUrl: './layout-wrapper.component.scss',
})
export class LayoutWrapperComponent {}
