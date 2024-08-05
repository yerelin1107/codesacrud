import { Routes } from '@angular/router';
import { ProductCreateComponent } from './Pages/Components/product/product-create/product-create.component';
import { ProductPageComponent } from './Pages/Components/product/product-page/product-page.component';
import { ProductEditComponent } from './Pages/Components/product/product-edit/product-edit.component';
import { HomeComponent } from './Pages/Components/home/home.component';

export const routes: Routes = [
    {path: 'product/addProduct', component: ProductCreateComponent, title: 'Creacion de Productos'},
    {path: 'product/:id/editProduct', component: ProductEditComponent, title: 'Edicion de Productos'},
    {path: 'products', component: ProductPageComponent, title: 'Lista de Productos'},
    {path: '', component: HomeComponent, title: 'Pagina de inicio'}
];
