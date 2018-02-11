import { Http } from '@angular/http';
import { ProduitService } from './../services/produit.service';
import { Jeux } from './../jeux';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-jeuxvideo-produit',
  templateUrl: './app-jeuxvideo-produit.component.html',
  styleUrls: ['./app-jeuxvideo-produit.component.css']
})
export class AppJeuxvideoProduitComponent implements OnInit {
  jeuxvideo:Jeux[];
  selectJeux:Jeux;

onSelect(jeux:Jeux): void {
    this.selectJeux = jeux;
  }
  constructor(private http: Http,private produit:ProduitService) { }
  getAllJeux(){
    this.produit.listOfJeux().subscribe(data => this.jeuxvideo = data);
  }

  addToPanier(id:number,nom:string,info:string,prix:any,img_profil:string,img1:string,img2:string,img3){
    this.produit.addAuPanier_Jeux(id,nom,info,img_profil,img1,img2,img3,prix);
  }
  ngOnInit() {
    this.getAllJeux();
  }

}
