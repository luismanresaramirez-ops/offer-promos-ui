import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../models/promotion.model';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css']
})
export class PromotionListComponent implements OnInit {
  /** Liste des promotions renvoyées par le backend. */
  promotions: Promotion[] = [];
  /** Date sélectionnée pour filtrer les promotions au format ISO (YYYY-MM-DD). */
  date: string = '';
  /** Flag indiquant si les décalages doivent être appliqués. */
  decalant: boolean = true;

  constructor(private promotionService: PromotionService) {}

  ngOnInit(): void {
    this.fetchPromotions();
  }

  /**
   * Récupère la liste des promotions selon les filtres sélectionnés.
   */
  fetchPromotions(): void {
    this.promotionService.getPromotions(this.date || undefined, this.decalant).subscribe(data => {
      this.promotions = data;
    });
  }

  /**
   * Appelé lors du changement des filtres (date ou decalant). Recharge la liste.
   */
  onFilterChange(): void {
    this.fetchPromotions();
  }
}