import { Routes } from '@angular/router';

// importation de la page d'acceuil
import { AccueilComponent } from './accueil/accueil.component';

export const routes: Routes = [
    // page par default
    {path :" ", component : AccueilComponent}
];
