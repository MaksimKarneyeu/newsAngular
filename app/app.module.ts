import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResultListComponent } from './result-list/result-list.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { NewsOverviewComponent } from './news-overview/news-overview.component';
import { ContainerComponent } from './container/container.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResultListComponent,
    NewsComponent,
    NewsDetailsComponent,
    LoadMoreComponent,
    NewsOverviewComponent,
    ContainerComponent,
    FilterPipe
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }



