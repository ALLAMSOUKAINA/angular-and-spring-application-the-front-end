import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FirstComponentComponent } from './firstcomponent/firstcomponent.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  { path: 'menu/produits', component: ListeProduitComponent },
  { path: 'menu/ajouterProduit', component: AddProductComponent },
  { path: 'menu/acceuil', component: AcceuilComponent },
  { path: 'menu/edit', component: EditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home/register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: AppComponent },


{ path: '', redirectTo: '/home', pathMatch: 'full' },

];


@NgModule({
  declarations: [
    AppComponent,
    ListeProduitComponent,
    AddProductComponent,
    AcceuilComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    FirstComponentComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),


  ],
  providers: [],
  bootstrap: [FirstComponentComponent]
})
export class AppModule { }
