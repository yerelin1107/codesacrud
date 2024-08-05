import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../Services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent {
  name: string = '';
  price: number = 0;

  constructor(private productService: ProductService) {}

  saveproduct() {
    let productData = { name: this.name, price: this.price };
    this.productService.saveProduct(productData).subscribe(
      (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Producto guardado correctamente',
          text: 'El producto ha sido guardado con éxito.',
        });
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al guardar el producto. Inténtalo de nuevo.',
        });
      }
    );
  }
}
