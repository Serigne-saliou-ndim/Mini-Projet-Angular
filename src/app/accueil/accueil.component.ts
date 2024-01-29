import { Component } from '@angular/core';

import { ProduitComponent } from '../produit/produit.component';
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [ProduitComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
