import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent {
  /**
   * Objet lié au formulaire de création d'article. Les champs doivent
   * correspondre aux propriétés attendues par le backend.
   */
  article = {
    type: 'MAJOR',
    designation: '',
    prix: 0
  };

  constructor(private articleService: ArticleService, private router: Router) {}

  /**
   * Enregistre l'article via le service puis retourne à la liste.
   */
  onSubmit(): void {
    this.articleService.createArticle({
      type: this.article.type,
      designation: this.article.designation,
      prix: this.article.prix
    }).subscribe(() => {
      // Après la création, on redirige vers la liste des articles
      this.router.navigate(['/articles']);
    });
  }
}