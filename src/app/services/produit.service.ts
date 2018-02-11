import { Commentaire } from './../commentaire';
import { Panier } from './../panier';
import { Chauss } from './../chauss';
import { Jeux } from './../jeux';
import { Ordi } from './../ordi';
import { Injectable } from '@angular/core';
import { Headers, RequestOptions,Http ,Response,RequestMethod} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class ProduitService {
  private ordiUrl ='app/ordis';
  private jeuxUrl='app/jeux';
  private chaussureUrl='app/chauss';
  private panierUrl='app/panier';
  private commentaireUrl='app/commentaire'
  private ordiSelectedSource=new Subject<Ordi>();

  constructor(private http: Http) { }
/**commentaire */
/**
 * avoir tout les commentaires de tout les produit 
 */
  listOfCommentaire():Observable<Commentaire[]>{
    return this.http.get(this.commentaireUrl).map(res => res.json().data as Commentaire[]);
  }
  /**
   * add un commentaire pour un produit
   */
  addCommentaire(id:number,id_produit:number,text:string){
    let headers =new Headers({'Content-Type':'application/json'});
    let options =new RequestOptions({headers:headers});
    return this.http.post(this.commentaireUrl,{id,id_produit,text},options).map(this.extractData);
  }
  /**prduit */
/**
 * parti du get les donnee
 */
 listOfOrdi():Observable<Ordi[]>{
      return this.http.get(this.ordiUrl).map(res => res.json().data as Ordi[]);
 }

 listOfJeux():Observable<Jeux[]>{
      return this.http.get(this.jeuxUrl).map(res => res.json().data as Jeux[]);
 }
 listOfChauss():Observable<Chauss[]>{
      return this.http.get(this.chaussureUrl).map(res => res.json().data as Chauss[]);
 }
 listOfProduit():Observable<Panier[]>{
   return this.http.get(this.panierUrl).map(res => res.json().data as Panier[]);
 }
/**
 * parti du add un produit au panier
 */
 addAuPanier_Ordi (id:number,name:string,info:string,img_profil:string,img1:string,img2:string,img3:string,prix:string): Observable<Ordi> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.panierUrl, { id,name,info,img_profil,img1,img2,img3,prix }, options)
                    .map(this.extractData);
  } 

  addAuPanier_Jeux(id:number,nom:string,info:string,img_profil:string,img1:string,img2:string,img3:string,prix:string): Observable<Jeux>{
    let headers=new Headers({'Content-Type' : 'application/json'});
    let options=new RequestOptions({headers:headers});

    return this.http.post(this.panierUrl,{ id,nom,info,img_profil,img1,img2,img3,prix },options).map(this.extractData);
  }

addAuPanier_Chauss(id:number,name:string,info:string,img_profil:string,img1:string,img2:string,img3:string,prix:string): Observable<Chauss>{
    let headers=new Headers({'Content-Type' : 'application/json'});
    let options=new RequestOptions({headers:headers});

    return this.http.post(this.panierUrl,{ id,name,info,img_profil,img1,img2,img3,prix },options).map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }


  /**
   * parti du supression d'un produit du panier
  
  let body = {
    target: targetId,
    subset: "fruits",
    reason: "rotten"
};

let options = new RequestOptionsArgs({ 
    body: body,
    method: RequestMethod.Delete
  });

this.http.request('http://testAPI:3000/stuff', options)
    .subscribe((ok)=>{console.log(ok)});
   */
 
  deleteProduit(id_: number) {
        return this.http.delete(`${this.panierUrl}/${id_}`).map((res:Response) => res.json());
  }  
}
