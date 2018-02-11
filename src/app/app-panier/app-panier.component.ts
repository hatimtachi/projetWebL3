import { ProduitService } from './../services/produit.service';
import { Http } from '@angular/http';
import { Panier } from './../panier';
import { Ordi } from './../ordi';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-panier',
  templateUrl: './app-panier.component.html',
  styleUrls: ['./app-panier.component.css']
})
export class AppPanierComponent implements OnInit {
  panier:Panier[];
  selectPanier:Panier; 
  constructor(private http:Http,private produit:ProduitService) {}

  ngOnInit() {
    this.produit.listOfProduit().subscribe(data => this.panier = data);
  }
  onSelect(pro:Panier): void {
    this.selectPanier = pro;
  }
  deleteProduit(id :number){
    console.log(id);
    this.produit.deleteProduit(id);
  }
}
