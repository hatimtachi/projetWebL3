import { AppSoldeComponent } from './app-solde/app-solde.component';
import { AppInforamtiqueProduitDetailComponent } from './app-inforamtique-produit-detail/app-inforamtique-produit-detail.component';
import { AppImageProduitComponent } from './app-image-produit/app-image-produit.component';
import { AppJeuxvideoProduitComponent } from './app-jeuxvideo-produit/app-jeuxvideo-produit.component';
import { AppPanierComponent } from './app-panier/app-panier.component';
import { AppInformatiqueProduitComponent } from './app-informatique-produit/app-informatique-produit.component';
import { RoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';
import { ProduitService } from './services/produit.service';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import {AngularFireModule} from 'angularfire2/index';
import {config} from './../environments/firebase.config'
@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppMenuComponent,
     AppMenuComponent,
    AppInformatiqueProduitComponent,
    AppHomeComponent,
    AppJeuxvideoProduitComponent,
    AppImageProduitComponent,
    AppSoldeComponent,
    AppInforamtiqueProduitDetailComponent,
    AppPanierComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
