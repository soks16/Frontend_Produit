import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {
    path:"produits",
    component:ProduitsComponent
  },
  {
    path:"new-produit",
    component:NewProduitComponent
  },
  {
    path:"",
    redirectTo:"produits",
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
