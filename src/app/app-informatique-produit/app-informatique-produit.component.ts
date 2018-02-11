import { Commentaire } from './../commentaire';
import { ProduitService } from './../services/produit.service';
import { Http } from '@angular/http';
import { Ordi } from './../ordi';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-app-informatique-produit',
  templateUrl: './app-informatique-produit.component.html',
  styleUrls: ['./app-informatique-produit.component.css']
})
export class AppInformatiqueProduitComponent implements OnInit {
  ordinateur:Ordi[];
  selectOrdi:Ordi;
  commentaire:Commentaire[];
onSelect(hero: Ordi): void {
    this.selectOrdi = hero;
  }
  
  constructor(private http: Http,private produit:ProduitService) { }
  
  getAllOrdi(){
    this.produit.listOfOrdi().subscribe(data => this.ordinateur = data);
  }
  ngOnInit() {
    this.getAllOrdi();
  }
}
