import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent implements OnInit {

  productId!: any;
  product: any = { name: '', price: 0 };

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.productId).subscribe((res: any) => {
      this.product = res;
    });
  }

  updateProduct() {
    console.log("Actualizando producto con datos:", this.product);
    this.productService.updateProduct(this.product, this.productId).subscribe({
      next: (res: any) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Producto Actualizado',
          text: 'El producto se ha actualizado correctamente.',
        });
      },
      error: (err: any) => {
        console.error('Error al actualizar el producto', err);
        Swal.fire({
          icon: 'error',
          title: 'Actualización Fallida',
          text: 'Hubo un error al actualizar el producto.',
        });
      }
    });
  }
}