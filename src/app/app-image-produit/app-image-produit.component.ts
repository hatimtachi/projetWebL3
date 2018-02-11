import { ProduitService } from './../services/produit.service';
import { Http } from '@angular/http';
import { Chauss } from './../chauss';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-image-produit',
  templateUrl: './app-image-produit.component.html',
  styleUrls: ['./app-image-produit.component.css']
})
export class AppImageProduitComponent implements OnInit {
chauss:Chauss[];
  selectOrdi:Chauss;

onSelect(hero: Chauss): void {
    this.selectOrdi = hero;
  }

  constructor(private http: Http,private produit:ProduitService) { }

  getAllChauss(){
    this.produit.listOfChauss().subscribe(data => this.chauss = data);
  }

  ngOnInit() {
    this.getAllChauss();
  }
}
