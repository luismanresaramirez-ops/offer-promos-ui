import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { PromotionListComponent } from './components/promotion-list/promotion-list.component';
import { MoisGratuitsComponent } from './components/mois-gratuits/mois-gratuits.component';

export const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleListComponent },
  { path: 'promotions', component: PromotionListComponent },
  { path: 'mois-gratuits', component: MoisGratuitsComponent },
  { path: '**', redirectTo: 'articles' }
];
