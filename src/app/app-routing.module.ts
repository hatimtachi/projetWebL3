import { AppPanierComponent } from './app-panier/app-panier.component';
import { AppInforamtiqueProduitDetailComponent } from './app-inforamtique-produit-detail/app-inforamtique-produit-detail.component';
import { AppSoldeComponent } from './app-solde/app-solde.component';
import { AppImageProduitComponent } from './app-image-produit/app-image-produit.component';
import { AppJeuxvideoProduitComponent } from './app-jeuxvideo-produit/app-jeuxvideo-produit.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppInformatiqueProduitComponent } from './app-informatique-produit/app-informatique-produit.component';
import {AppComponent } from './app.component'
const routes: Routes = [
  {
    path:'',
    component :AppHomeComponent
  },
  {
    path:'informatique',
    component:AppInformatiqueProduitComponent
  },
  {
    path:'informatique/:id',
    component:AppInforamtiqueProduitDetailComponent
  },
  {
    path:'jeuxvideo',
    component:AppJeuxvideoProduitComponent
  },
  {
    path:'chaussures',
    component:AppImageProduitComponent
  },
  {
    path:'solde',
    component:AppSoldeComponent
  },
  {
    path:'panier',
    component:AppPanierComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
