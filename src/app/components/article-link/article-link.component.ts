import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-link',
  templateUrl: './article-link.component.html',
  styleUrls: ['./article-link.component.css']
})
export class ArticleLinkComponent implements OnInit {
  /** Liste des articles majeurs disponibles pour l'association. */
  majors: Article[] = [];
  /** Liste des articles mineurs disponibles pour l'association. */
  minors: Article[] = [];
  /** Identifiant de l'article majeur sélectionné. */
  selectedMajorId: number | null = null;
  /** Identifiant de l'article mineur sélectionné. */
  selectedMinorId: number | null = null;

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    // Chargement des articles majeurs et mineurs pour le sélecteur
    this.articleService.getArticles('MAJOR').subscribe(data => (this.majors = data));
    this.articleService.getArticles('MINOR').subscribe(data => (this.minors = data));
  }

  /**
   * Associe les articles sélectionnés et redirige vers la liste en cas de succès.
   */
  onSubmit(): void {
    if (this.selectedMajorId != null && this.selectedMinorId != null) {
      this.articleService
        .linkArticles(this.selectedMajorId, this.selectedMinorId)
        .subscribe(() => {
          this.router.navigate(['/articles']);
        });
    }
  }
}