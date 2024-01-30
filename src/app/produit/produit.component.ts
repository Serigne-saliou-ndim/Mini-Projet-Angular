import { Component } from '@angular/core';
import { ServiceproduitService } from './serviceproduit.service';
import { CommonModule } from '@angular/common';///Pour l'usage des boucles, instruction debas etc

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {

    list_produit:any;
    lien_image="assets/img/"
  constructor(private etudiantService:ServiceproduitService){
 
  }
  //Fonction d'initialisation
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProduit();
  }
  getProduit():void{
    this.etudiantService.getProduits().subscribe(
      etu =>{
        this.list_produit=etu;
      }
    )
  }


}
