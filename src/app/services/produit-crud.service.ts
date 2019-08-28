import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../Produit';
import { Observable } from 'rxjs';
import { ListeProduitComponent } from '../liste-produit/liste-produit.component';
@Injectable({
  providedIn: 'root'
})
export class ProduitCRUDService {
  produitslist;
  id: any;
  response: any;
  data: Produit;
  p:Produit;
nom;
  constructor(private http: HttpClient) {

   }
ngOnInit(){

}
  showProductList() {
    const obs: Observable<Object> = this.http.get('http://localhost:9090/Produits/');
    obs.subscribe((produitslist) => {
    this.produitslist = produitslist;
  console.log(produitslist);

});
return this.produitslist;
  }

  searchById(id) {
    const obs = this.http.get('http://localhost:9090/Produits/' + id);
   obs.subscribe((response) => {
     this.response = response;
   console.log(response);
 });
 
  return this.response;

  }
  delete(id) {
    window.alert('sure ??!');
    const obs = this.http.delete('http://localhost:9090/Produits/' + id);
    obs.subscribe((response) => {
      this.response = response;
    console.log(this.response);
  });
  }
  ajouter(data) {
    const obs = this.http.post('http://localhost:9090/Produits/', data);
    obs.subscribe((response) => {
      this.response = response;
      console.log(data);

      window.alert('Your product has been added to the list!');


  });
}
modifier(p) {
  const obs = this.http.put('http://localhost:9090/EditProduits/', p);
  obs.subscribe((response) => {
    this.response = response;
    console.log(p);

});
}
}
