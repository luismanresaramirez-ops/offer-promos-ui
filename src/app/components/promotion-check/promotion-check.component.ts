import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Promotion } from '../../models/promotion.model';

@Component({
  selector: 'app-promotion-check',
  templateUrl: './promotion-check.component.html',
  styleUrls: ['./promotion-check.component.css']
})
export class PromotionCheckComponent implements OnInit {
  /** Identifiant de l'article dont on veut vérifier la promotion. */
  articleId: number = 0;
  /** Date sélectionnée pour la vérification de promotion. */
  date: string = '';
  /** Résultat de la promotion récupéré auprès du backend. */
  promotion: Promotion | null = null;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchPromotion();
  }

  /**
   * Récupère la promotion pour l'article en fonction de la date sélectionnée.
   */
  fetchPromotion(): void {
    this.articleService.checkPromotion(this.articleId, this.date || undefined).subscribe(data => {
      this.promotion = data;
    });
  }
}