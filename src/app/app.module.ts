import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatToolbarModule,MatCardModule,MatIconModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { TechnologyComponent } from './technology/technology.component';
import { ToptechComponent } from './toptech/toptech.component';
import { SportComponent } from './sport/sport.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadlinesComponent,
    NavbarComponent,
    TechnologyComponent,
    ToptechComponent,
    SportComponent,
    EntertainmentComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
