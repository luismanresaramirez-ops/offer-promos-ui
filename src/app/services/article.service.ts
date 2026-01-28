import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { Promotion } from '../models/promotion.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private baseUrl = environment.apiUrl + '/offers-promotions/articles';

  constructor(private http: HttpClient) {}

  /**
   * Récupère la liste des articles selon leur type. Par défaut, on récupère les
   * articles majeurs. Le type peut être "MAJOR" ou "MINOR" (ou toute valeur
   * supportée par le backend).
   */
  getArticles(type: string = 'MAJOR'): Observable<Article[]> {
    const params = new HttpParams().set('type', type);
    return this.http.get<Article[]>(this.baseUrl, { params });
  }

  /**
   * Récupère un article par son identifiant. Le type permet au backend de
   * filtrer les mineurs associés.
   */
  getArticle(id: number, type: string = 'MAJOR'): Observable<Article> {
    const params = new HttpParams().set('type', type);
    return this.http.get<Article>(`${this.baseUrl}/${id}`, { params });
  }

  /**
   * Crée un nouvel article. Le corps attendu par le backend doit contenir le type,
   * la désignation et le prix de l'article.
   */
  createArticle(article: { type: string; designation: string; prix: number }): Observable<void> {
    return this.http.post<void>(this.baseUrl, article);
  }

  /**
   * Associe un article mineur à un article majeur en envoyant les identifiants
   * correspondants.
   */
  linkArticles(majeurId: number, mineurId: number): Observable<void> {
    const body = { majeur: majeurId, mineur: mineurId };
    return this.http.post<void>(`${this.baseUrl}/bind`, body);
  }

  /**
   * Vérifie la promotion appliquée à un article pour une date donnée. Si la
   * date n'est pas fournie, la date courante du backend est utilisée.
   */
  checkPromotion(articleId: number, date?: string): Observable<Promotion> {
    let params = new HttpParams();
    if (date) {
      params = params.set('date', date);
    }
    return this.http.get<Promotion>(`${this.baseUrl}/${articleId}/promo`, { params });
  }
}