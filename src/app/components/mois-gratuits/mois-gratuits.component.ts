import { Component } from '@angular/core';
import { MoisGratuitService } from '../../services/mois-gratuit.service';
import { MoisGratuitHistorique } from '../../models/mois-gratuit.model';

@Component({
  selector: 'app-mois-gratuits',
  templateUrl: './mois-gratuits.component.html',
  styleUrls: ['./mois-gratuits.component.css']
})
export class MoisGratuitsComponent {
  /** Numéro de contrat saisi par l'utilisateur. */
  numContrat: number | null = null;
  /** Indique si l'on souhaite afficher uniquement les mois gratuits actifs. */
  active: boolean = true;
  /** Résultat de la recherche : liste d'historique des mois gratuits. */
  historique: MoisGratuitHistorique[] = [];

  constructor(private moisService: MoisGratuitService) {}

  /**
   * Lance la recherche des mois gratuits pour le contrat saisi. Si aucun
   * numéro n'est renseigné, aucune requête n'est envoyée.
   */
  fetchHistorique(): void {
    if (this.numContrat !== null) {
      this.moisService.getHistorique(this.numContrat, this.active).subscribe(data => {
        this.historique = data;
      });
    }
  }
}