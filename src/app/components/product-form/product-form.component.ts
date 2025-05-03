import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product.service';


@Component({
  selector: 'app-product-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {

  @Input() initialProduct: Product | null = null;
  @Output() submitForm = new EventEmitter<Product>();

  productForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      this.productForm = this.fb.group({
        name: [this.initialProduct?.name || '', Validators.required],
        description: [this.initialProduct?.description || '', Validators.required],
        price: [this.initialProduct?.price || '', [Validators.required, Validators.min(0)]],
        category: [this.initialProduct?.category || '', Validators.required]
      });
  }

  onSubmit(): void{
    if(this.productForm.valid){
      this.submitForm.emit(this.productForm.value);
    }
  }

}
