import { Component, OnInit, Input } from '@angular/core';
import { ProduitCRUDService } from '../services/produit-crud.service';
import { ListeProduitComponent } from '../liste-produit/liste-produit.component';
import { Produit } from '../Produit';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  //produits:Produit;
@Input("name") produit ;
  constructor(private service: ProduitCRUDService) { 
  }

  ngOnInit() {
   // this.produit.id=this.idedit;

  }

 editProduct(prod) {
    this.service.modifier(prod);
    console.log(prod);
  }
 

}
