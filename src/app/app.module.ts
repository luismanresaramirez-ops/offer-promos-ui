import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleCreateComponent } from './components/article-create/article-create.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleLinkComponent } from './components/article-link/article-link.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { MoisGratuitsComponent } from './components/mois-gratuits/mois-gratuits.component';
import { PromotionCheckComponent } from './components/promotion-check/promotion-check.component';
import { PromotionListComponent } from './components/promotion-list/promotion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleCreateComponent,
    ArticleDetailComponent,
    ArticleLinkComponent,
    ArticleListComponent,
    MoisGratuitsComponent,
    PromotionCheckComponent,
    PromotionListComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
