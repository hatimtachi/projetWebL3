import { Commentaire } from './../commentaire';
import { Http } from '@angular/http';
import { ProduitService } from './../services/produit.service';
import { AngularFireModule } from 'angularfire2/index';
import { config } from './../../environments/firebase.config';
import { Ordi } from './../ordi';
import { Component, OnInit , Input } from '@angular/core';
import {initializeApp,database} from 'firebase';
import{AngularFire}from'angularfire2';
@Component({
  selector: 'app-inforamtique-produit-detail',
  templateUrl: './app-inforamtique-produit-detail.component.html',
  styleUrls: ['./app-inforamtique-produit-detail.component.css']
})
export class AppInforamtiqueProduitDetailComponent {
  @Input() ordi:Ordi;
  commentaire:Commentaire[];
  constructor(private http: Http,private produit:ProduitService){
  this.getAllCommentaire();
}
 addToPanier(id:number,nom:string,info:string,prix:any,img_profil:string,img1:string,img2:string,img3){
    this.produit.addAuPanier_Jeux(id,nom,info,img_profil,img1,img2,img3,prix);
  }
   getAllCommentaire(){
    this.produit.listOfCommentaire().subscribe(data => this.commentaire=data);
  }
}