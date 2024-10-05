import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CoreModule } from '../../../core/core.module';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CoreModule, NgFor],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() product: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToProductDetails() {
    this.router.navigate(['/home/product-details'], {
      queryParams: this.product,
    });
  }
}
