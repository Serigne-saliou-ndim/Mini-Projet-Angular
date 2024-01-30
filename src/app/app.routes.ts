import { Routes } from '@angular/router';

// importation de la page d'acceuil
import { AccueilComponent } from './accueil/accueil.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';

export const routes: Routes = [
    // page par default
   // {path :'', component : DetailproduitComponent},
    { path: '', component: AccueilComponent },
    { path: 'produits', component: AppComponent },
    { path: 'produits/:categorie', component: AppComponent },
    { path: 'produit/:id', component: DetailproduitComponent },
];
