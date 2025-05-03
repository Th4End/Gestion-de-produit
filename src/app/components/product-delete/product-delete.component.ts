import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit {
  productId: number = 0;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productId = Number(id ?? 0);
  }

  confirmDelete(): void {
    this.isDeleting = true;
    this.productService.delete(this.productId).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        console.error('Erreur de suppression', err);
        this.isDeleting = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
