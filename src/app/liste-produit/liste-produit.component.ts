import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProduitCRUDService } from '../services/produit-crud.service';
import { Produit } from '../Produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  produits: Produit;
  show = true;
  idapi;
  search = !this.show;
  idsupp;
  editProduct:Produit;


  constructor(private http: HttpClient, private service: ProduitCRUDService,private router: Router) {


  }
  ngOnInit() { 
    this.search = false;
    this.produits = this.service.showProductList();
    this.show = true;
    console.log(this.produits);
  }


  list() {
    this.search = false;
    this.produits = this.service.showProductList();
    this.show = true;
    console.log(this.produits);
    

  }
  searchID() {
  this.produits = this.service.searchById(this.idapi);

   this.search = true;
   this.show = false;
  console.log(this.idapi);


  }
  edit(produits){
    console.log("edit");
    this.editProduct=produits;

   // this.router.navigateByUrl('/menu/edit');
    console.log(this.editProduct);

  }
  supprimer(idsupp) {

    this.service.delete(idsupp);
    console.log(idsupp);
    this.router.navigateByUrl('/menu/produits');

    //this.search = !this.search;
    //this.idapi = '';

  }


}
