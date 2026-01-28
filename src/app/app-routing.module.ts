import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';
import { ArticleLinkComponent } from './components/article-link/article-link.component';
import { PromotionListComponent } from './components/promotion-list/promotion-list.component';
import { PromotionCheckComponent } from './components/promotion-check/promotion-check.component';
import { MoisGratuitsComponent } from './components/mois-gratuits/mois-gratuits.component';

/**
 * Définition des routes de l'application. Chaque chemin est associé à un
 * composant chargé d'afficher la vue correspondante.
 */
const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleListComponent },
  { path: 'articles/new', component: ArticleCreateComponent },
  { path: 'articles/link', component: ArticleLinkComponent },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: 'articles/:id/promo', component: PromotionCheckComponent },
  { path: 'promotions', component: PromotionListComponent },
  { path: 'mois-gratuits', component: MoisGratuitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}