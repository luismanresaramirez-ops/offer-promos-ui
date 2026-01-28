import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  /**
   * Tableau des articles affichés dans la liste. Les articles sont chargés
   * depuis le service lorsqu'on change le type.
   */
  articles: Article[] = [];
  displayedColumns: string[] = ['id', 'designation', 'price', 'actions'];

  /**
   * Type sélectionné pour filtrer les articles. Valeurs possibles :
   * MAJOR pour les articles majeurs, MINOR pour les articles mineurs.
   */
  selectedType = 'MAJOR';

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.fetchArticles();
  }

  /**
   * Charge les articles en fonction du type sélectionné.
   */
  fetchArticles(): void {
    this.articleService.getArticles(this.selectedType).subscribe(data => {
      this.articles = data;
    });
  }

  /**
   * Appelé lorsque l'utilisateur change de type via le sélecteur. Recharge
   * automatiquement la liste.
   */
  onTypeChange(): void {
    this.fetchArticles();
  }
}
