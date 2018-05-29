import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found-component.component'

const routes: Routes = [
	{ path: 'products-list', component: ProductsListComponent },
	{ path: 'products-list/products-detail/:id', component: ProductDetailComponent },
	{ path: '', redirectTo: '/products-list', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
