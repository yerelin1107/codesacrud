import { Component } from '@angular/core';
import { ProductService, ProductResponse } from '../../../../Services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  constructor(private productService: ProductService) {}

  products!: ProductResponse[];

  ngOnInit() {
    console.log("Getting data");
    this.getProductList();
  }

  getProductList() {
    console.log("before entering");
    this.productService.getProductLists().subscribe((res: any) => {
      console.log(res);
      this.products = res;
    });
  }

  deleteProduct(event: any, productId: Number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo!',
      cancelButtonText: 'Cancelar'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        event.target.innerText = "Deleting..";

        this.productService.deleteProduct(productId).subscribe((res: any) => {
          this.getProductList();
          Swal.fire(
            '¡Borrado!',
            'El producto ha sido borrado.',
            'success'
          );
        });
      }
    });
  }
}
